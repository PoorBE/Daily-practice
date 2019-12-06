window.addEventListener('load', function() {
    //获取元素
    var focus = document.querySelector('.focus')
        //focus宽度
    var w = focus.offsetWidth
    var ul = focus.children[0] //foucus里的第一个元素
    var ol = focus.children[1] //foucus里的第二个元素
    var index = 0

    //自动播放
    var timer = setInterval(function() {
        index++
        var translatex = -index * w //移动的距离为第index张图片×图片的宽度（fouces的宽度）
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000)

    // 无缝滚动
    // 当过渡完成之后，判断监听过渡完成事件transitionend 
    ul.addEventListener('transitionend', function() {
            if (index >= 3) {
                //当轮播到最后一张图时，下一张跳回第一张图，并去除过渡

                index = 0 //跳回第一张
                ul.style.transition = 'none'
                var translatex = -index * w //用最新的index×宽度
                ul.style.transform = 'translateX(' + translatex + 'px)'
            } else if (index < 0) { //当向左滑时，相当于第一张调到第三张index为2
                index = 2
                ul.style.transition = 'none'
                var translatex = -index * w //用最新的index×宽度
                ul.style.transform = 'translateX(' + translatex + 'px)'
            }


            //小圆圈跟着变化利用classList
            ol.querySelector('.current').classList.remove('current')
            ol.children[index].classList.add('current')

        })
        // 手指拖动
    var starX = 0
    var moveX = 0
    var flag = false
        //手指触摸
    ul.addEventListener('touchstart', function(e) {
            starX = e.targetTouches[0].pageX
            clearInterval(timer)
        })
        //手指移动
    ul.addEventListener('touchmove', function(e) {
            moveX = e.targetTouches[0].pageX - starX
            var translatex = -index * w + moveX //移动的距离为第index张图片×图片的宽度（fouces的宽度）
            ul.style.transition = 'none'
            ul.style.transform = 'translateX(' + translatex + 'px)'
            flag = true
            e.preventDefault(); // 阻止滚动屏幕的行为
        })
        //上一张下一张的播放
    ul.addEventListener('touchend', function() {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--
                } else {
                    index++
                }
                ul.style.transition = 'all .3s'
                var translatex = -index * w //用最新的index×宽度
                ul.style.transform = 'translateX(' + translatex + 'px)'
            } else {
                ul.style.transition = 'all .3s'
                var translatex = -index * w //用最新的index×宽度
                ul.style.transform = 'translateX(' + translatex + 'px)'
            }
        }
        clearInterval(timer)
        timer = setInterval(function() {
            index++
            var translatex = -index * w //移动的距离为第index张图片×图片的宽度（fouces的宽度）
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }, 2000)


    })

    //返回模块
    var goBack = document.querySelector('.goBack ')
    var nav = document.querySelector('nav')
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'
        }
    })
    goBack.addEventListener('click', function() {
        window.scroll(0, 0)
    })

})
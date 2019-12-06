window.addEventListener('load', function() {
    //获取元素
    var focus = document.querySelector('.focus')
    var ul = focus.children[0] //ul为focus第一个孩子
    var w = focus.offsetWidth //focus的宽即为图片的宽
    var ol = focus.children[1] //ol为focus第二个孩子
    var index = 0
    var timer = setInterval(function() {
        index++
        var translatex = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)'
    }, 2000)


    //判断监听完成事件


    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0
            ul.style.trasnition = 'none'

            var translatex = -index * w
            ul.style.transform = 'translateX(' + translatex + 'px)'
        } else if (index < 0) {
            index = 2
            ul.style.trasnition = 'none'

            var translatex = -index * w
            ul.style.transform = 'translateX(' + translatex + 'px)'
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })



})
//当页面加载完毕，再执行js代码
window.addEventListener('load', function() {
    //获取左右按钮
    var arrow_l = document.querySelector('.arrow-l')
    var arrow_r = document.querySelector('.arrow-r')
        //获取轮播图盒子focus
    var focus = document.querySelector('.focus')
        //获取图片宽度即为focus盒子宽度
    var focusWidth = focus.offsetWidth

    //鼠标经过显示按钮
    focus.addEventListener('mouseenter', function() {
            arrow_l.style.display = 'block'
            arrow_r.style.display = 'block'
            clearInterval(timer) //鼠标经过清除计时器
            timer = null
        })
        //鼠标离开隐藏按钮
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none'
            arrow_r.style.display = 'none'
            timer = setInterval(function() {
                    arrow_r.click() //自动点击事件
                }, 2000) //鼠标离开开始计数器
        })
        //动态生成小圆圈，根据图片的张数
        //获取focus里面得ul和ol，英文页面中的ul，ol可能很多
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('.circle')
        //利用for循环动态生成li，添加到ol中
    for (var i = 0; i < ul.children.length; i++) { //ul.children.length是ul中li的个数
        var li = document.createElement('li') //创建li
            //生成li的同时给他一个自定义属性
        li.setAttribute('index', i)
        ol.appendChild(li) //将创建的li添加到ol中
            //排他思想
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '' //给所有的li清空样式
            }
            //点击的时候获得当前的索引号
            var index = this.getAttribute('index')
                //点击后将获得的索引号给num和circle，使他们同步变化
            num = index //这里的num为全局变量
            circle = index //全局变量
            this.className = 'current' //给当前的点击li样式
            animate(ul, -index * focusWidth) //调用动画移动的是ul，向左移动所以用负值，移动的距离为当前里的索引号乘以图片宽度
        })
    }
    ol.children[0].className = 'current' //给以第一个小圆圈选中状态

    //克隆第一张图
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first) //克隆图加入到ul里
        //按钮轮播
    var num = 0
    var circle = 0
    var flag = true;
    //右侧按钮
    arrow_r.addEventListener('click', function() {
            if (flag) {
                flag = false
                if (num == ul.children.length - 1) { //如果num为最后一个li的索引号，则ul的left为0
                    ul.style.left = '0'
                    num = 0
                }
                num++ //每点一下num加一
            }

            animate(ul, -num * focusWidth, function() {
                flag = true
            })
            circle++
            if (circle == ol.children.length) {
                circle = 0
            }
            //调用函数
            circleChange()
        })
        //左侧按钮
    arrow_l.addEventListener('click', function() {
            if (flag) {
                flag = false
                if (num == 0) { //如果num为最后一个li的索引号，则ul的left为0
                    num = ul.children.length - 1
                    ul.style.left = -num.focusWidth + 'px'

                }
                num-- //每点一下num加一
            }
            animate(ul, -num * focusWidth, function() {
                flag = true
            })
            circle--
            if (circle < 0) {
                circle = ol.children.length - 1
            }
            //调用函数
            circleChange()
        })
        //封装圆圈跟随按钮点击的函数
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    }
    //自动播放轮播图
    var timer = setInterval(function() {
        arrow_r.click() //自动点击事件
    }, 2000)
})
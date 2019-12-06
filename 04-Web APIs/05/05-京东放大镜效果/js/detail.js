window.addEventListener('load', function() { //页面加载完毕，再执行JS
    //获取元素
    var preview_img = this.document.querySelector('.preview_img')
    var mask = this.document.querySelector('.mask')
    var big = this.document.querySelector('.big')
    preview_img.addEventListener('mouseover', function() {
        //鼠标经过显示放大镜
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    preview_img.addEventListener('mouseout', function() {
            //鼠标离开隐藏放大镜
            mask.style.display = 'none'
            big.style.display = 'none'
        })
        //鼠标移动带动透明盒子
    preview_img.addEventListener('mousemove', function(e) {
        //注意父元素是谁
        var x = e.pageX - this.offsetLeft
        var y = e.pageY - this.offsetTop
            //格挡层移动距离
        var maskx = x - mask.offsetWidth / 2
        var masky = y - mask.offsetHeight / 2
            //格挡层最大移动距离
        var maskMax = this.offsetWidth - mask.offsetWidth
        if (maskx <= 0) {
            //如果x 坐标小于了0 就让他停在0 的位置
            // 遮挡层的最大移动距离为this.offsetWidth - mask.offsetWidth
            maskx = 0
        } else if (maskx >= maskMax) { //当遮挡层移动了最大距离则停止
            maskx = maskMax
        }
        if (masky <= 0) {
            masky = 0
        } else if (masky >= maskMax) {
            masky = maskMax
        }
        mask.style.left = maskx + 'px'
        mask.style.top = masky + 'px'
            //获取图片
        var bigImg = document.querySelector('.bigImg')
            //大图片最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth
            // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离  /遮挡层的最大移动距离    成比例移动
            //大图片移动距离
        var bigx = maskx * bigMax / maskMax
        var bigy = masky * bigMax / maskMax
            //格挡层移动方向与大图移动方向相反
        bigImg.style.left = -bigx + 'px'
        bigImg.style.top = -bigy + 'px'
    })
})
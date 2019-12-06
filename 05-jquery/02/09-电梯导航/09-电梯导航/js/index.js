$(function() {

    //页面滚动事件
    gunDong()
    var flag = true

    function gunDong() {
        if ($(document).scrollTop() >= $(".recommend").offset().top) {
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut()
        }
    }
    $(window).scroll(function() {
            gunDong()
            if (flag) {
                $(".floor .w").each(function(i, ele) {
                    if ($(document).scrollTop() >= $(ele).offset().top) {
                        $(".fixedtool li").eq(i).addClass("current").siblings().removeClass()
                    }
                })
            }
        })
        //点击电梯导航的li，页面跳转到相应位置
    $(".fixedtool li").click(function() {
        flag = false
        var current = $(".floor .w").eq($(this).index()).offset().top
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true
        })
        $(this).addClass("current").siblings().removeClass()
    })
})
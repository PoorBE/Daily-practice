$(function() {
    //全选复选框选中时，小复选框选中
    $(".checkall").change(function() {
            // $(this).prop("checked")相当于判断全选框为false还是true
            // 当任意全选为true时，小复选框和另一个全选框状态为true
            $(".j-checkbox ,.checkall").prop("checked", $(this).prop("checked")) //该变其他复选框的状态
            if ($(this).prop("checked")) {
                $(".cart-item").addClass("check-cart-item")
            } else {
                $(".cart-item").removeClass("check-cart-item")

            }
        })
        //小复选框全选中时，全选框选中
    $(".j-checkbox").change(function() {
            //$(".j-checkbox:checked")为复选框被选中的个数，$(".j-checkbox").length为该种复选框的个数 该两值相等时全选框选中
            if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
                $(".checkall").prop("checked", true)
            } else {
                $(".checkall").prop("checked", false)

            }
            if ($(this).prop("checked")) {
                $(this).parents(".cart-item").addClass("check-cart-item")
            } else {
                $(this).parents(".cart-item").removeClass("check-cart-item")

            }
        })
        //商品数量加减

    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val()
        n++ //每点一下，将n的数值给他兄弟的value
        $(this).siblings(".itxt").val(n) //他兄弟的value值，不影响其他的itxt

        // 小计模块
        // 获取单件价格
        //$(this).parent().parent()可换为$(this).parents(".p-num")
        var p = $(this).parents(".p-num").siblings(".p-price").text()
        p = p.substr(1) //利用截取字符串，将￥符号去掉
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (n * p).toFixed(2))
            //小计价格为单件价格乘以itxt的value值 toFixed()括号里为保留几位小数   
        getSum()

    })
    $(".decrement").click(function() {
            var n = $(this).siblings(".itxt").val()
            if (n == 1) { //如果n为1，则跳出执行，n--不再减，n为字符串，不能用全等
                return false
            }
            n--
            $(this).siblings(".itxt").val(n)
                // 小计模块
                // 获取单件价格
            var p = $(this).parents(".p-num").siblings(".p-price").text()
            p = p.substr(1) //利用截取字符串，将￥符号去掉
            $(this).parents(".p-num").siblings(".p-sum").text("￥" + (n * p).toFixed(2))
            getSum()

        })
        //用户自己填值时的小计
    $(".itxt").change(function() {
            var n = $(this).val() //取得用户输入的数量
            var p = $(this).parents(".p-num").siblings(".p-price").text()
            p = p.substr(1) //利用截取字符串，将￥符号去掉
            $(this).parents(".p-num").siblings(".p-sum").text("￥" + (n * p).toFixed(2))
            getSum()
        })
        //打开网页时先调用一下
    getSum()
        //封装计算总价和总数的函数
    function getSum() {
        var money = 0
        var count = 0

        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val())
        })
        $(".amount-sum em").text(count)
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(1))
        })
        $(".price-sum em").text("￥" + money.toFixed(2))
    }
    //删除商品
    //删除当前的商品
    $(".p-action a").click(function() {
            $(this).parents(".cart-item").remove() //他自己的祖辈删除
            getSum()
        })
        //删除选中的商品
    $(".remove-batch").click(function() {
            $(".j-checkbox:checked").parents(".cart-item").remove()
            getSum() //判断有哪些按钮是选中状态，而后删除他父辈
        })
        //清空所以商品
    $(".clear-all").click(function() {
        $(".cart-item").remove()
        getSum()
    })
})
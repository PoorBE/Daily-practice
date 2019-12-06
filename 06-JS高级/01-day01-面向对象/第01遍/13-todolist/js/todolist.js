$(function() {
    // load();
    $("#title").on("keydown", function(e) {
            if (e.keyCode === 13) {
                //读取本地存储原有的数据
                var local = getData();
                local.push({ title: $(this).val(), done: false });
                saveData(local);
                //渲染数据
                load()
            }
        })
        //删除操作 a是动态生成的所以用委托事件
    $("ol").on("click", "a", function() {
            //先获取本地数据
            var data = getData();
            //修改数据，获取自定义的索引号
            var index = $(this).attr("id");
            data.splice(index, 1)
                //删完后保存到本地存储
            saveData(data);
            //重新渲染页面
            load()

        })
        //正在进行和已完成操作
    $("ol, ul").on("click", "input", function() {
            //先获取本地数据
            var data = getData();
            //获取input兄弟a的自定义索引号
            var index = $(this).siblings('a').attr('id')
            data[index].done = $(this).prop("checked")
                //保存到本地存储
            saveData(data);
            //重新渲染页面
            load();

        })
        //读取本地数据
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            return JSON.parse(data); //如果里面的数据不为空，则返回对象形式的数组
        } else {
            return []; //如果数据为空。则返回一个空数组
        }
    }
    //保存本地数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    //渲染加载数据(先读取本地数据，再进行遍历渲染)
    function load() {
        //先获取本地数据
        var data = getData();
        //遍历前先清空ol里的数据
        $("ol,ul").empty();
        //遍历
        $.each(data, function(i, n) {
            if (n.done) {
                $('ul').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='#' id=" + i + "></a></li>")
            } else {
                $('ol').prepend("<li><input type='checkbox'><p>" + n.title + "</p><a href='#' id=" + i + "></a></li>")
            }

        })
    }
})
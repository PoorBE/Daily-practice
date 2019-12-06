$(function() {
    // alert(11);
    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    load()
    $("#title").on("keydown", function(event) {
            if (event.keyCode === 13) {
                if ($(this).val() === "") {
                    alert("请输入您要的操作");
                } else {
                    // 先读取本地存储原来的数据
                    var local = getData();
                    // console.log(local);
                    // 把local数组进行更新数据 把最新的数据追加给local数组
                    local.push({ title: $(this).val(), done: false });
                    // 把这个数组local 存储给本地存储
                    saveData(local);
                    // 2. toDoList 本地存储数据渲染加载到页面
                    load();
                    $(this).val("");
                }
            }
        })
        //删除数据
    $("ol,ul").on("click", "a", function() {
            var data = getData()
            var index = $(this).attr("id") //获取id的值
                //删除相应的数据
            data.splice(index, 1)
                //再存储和渲染数据
            saveData(data)
            load()
        })
        //正在进行和已完成操作
    $("ul,ol").on("click", "input", function() {
            // 先获取本地存储的数据
            var data = getData();
            // 修改数据
            var index = $(this).siblings("a").attr("id");
            // data[?].done = ?
            data[index].done = $(this).prop("checked");
            // 保存到本地存储
            saveData(data);
            // 重新渲染页面
            load();
        })
        // 读取本地存储
    function getData() {
        var data = localStorage.getItem("todolist") //获取
        if (data !== null) { //如果有数据，则将数据转换为对象
            return JSON.parse(data)
        } else {
            return [] //没有数据。则返回一个空数组
        }
    }
    //存储本地数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data)) //要存储的数据转换为字符串
    }
    //渲染
    function load() {
        var data = getData()
        $("ol, ul").empty(); //先清空之间的li
        var todoCount = 0; // 正在进行的个数
        var doneCount = 0; // 已经完成的个数
        //遍历这个数据
        $.each(data, function(i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        })
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }
})
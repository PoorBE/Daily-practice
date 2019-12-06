const mongoose = require('mongoose'); //引包
//连接数据库
mongoose.connect("mongodb://localhost/playground", { useNewUrlParser: true })
    .then(() => console.log("数据库连接成功"))
    .catch(err => console.log(err, "数据库连接失败"))

//1.创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
//2.使用规则创建集合 
//2.1集合名称  2.2集合规则
const Course = mongoose.model('Course', courseSchema) //courses
    //3.创建文档
const course = new Course({
        name: "好难搞哦",
        author: "傻鸟",
        isPublished: true
    })
    //将文档写入数据库
course.save();
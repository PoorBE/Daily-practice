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
    //利用creat 回调函数
    // Course.create({
    //     name: "我太难了",
    //     author: "傻鸟",
    //     isPublished: false
    // }, (err, result) => {
    //     console.log(err);
    //     console.log(result);
    // })


//利用异步函数
// Course.create({
//         name: "奥利给",
//         author: "傻鸟",
//         isPublished: false
//     }).then(result => console.log(result))
//     .catch(err => console.log(err))


async function createCourse() {
    const c1 = await Course.create({
        name: "勇于面对",
        author: "傻鸟",
        isPublished: false
    });
    console.log(c1, '存储成功');

}
createCourse()
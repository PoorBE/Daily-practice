// 引入第三方模块mongoose
const mongoose=require('mongoose')
//创建用户集合Schema
let mySchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email: {
        type:String,
        unique:true//不能重复
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    //0为启动，1为禁用 默认为0
    state:{
        type:Number,
        dafault:0
    }
})


//创建用户集合构造函数
const User=mongoose.model('User',mySchema);


// 创建测试超级管理员
// User.create({
//     username:'itheima',
//     email:'itheima@itcast.com',
//     password:'123456',
//     role:'admin',
//     satte:0
// }).then(()=>{console('用户创建成功')})
// .then(()=>{console.log('用户创建失败')})


//到处
module.exports= {
    User
}
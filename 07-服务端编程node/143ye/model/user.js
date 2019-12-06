const mongoose=require('mongoose')
// 创建集合规则
const myScheam=new mongoose.Schema({
    username: {
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{ 
        type:String,
        unique:true,//保证邮箱地址插入数据库是不重复
        require:true
    },
   password: {
       type:String,
       required:true
   } ,
   state: {
       type:Number,
       dafault:0 //0为启用 1为禁用 默认为1
   },
   role: {
       type:String,
       required:true
   }
})
//创建集合
const User=mongoose.model('User',myScheam)

//导出
module.exports={
    User
}
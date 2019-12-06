const express=require('express')
const home=express.Router()

//登录
home.get('/index',(req,res)=>{
    res.send('超哥，我哭了，恁呐')
})



module.exports=home
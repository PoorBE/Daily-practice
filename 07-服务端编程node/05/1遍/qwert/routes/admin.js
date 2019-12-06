const express=require('express')

const admin=express.Router()


admin.get('/index',(req,res)=>{
    res.send('管理首页')
})
admin.get('/list',(req,res)=>{
    res.send('管理列表')
})

module.exports=admin
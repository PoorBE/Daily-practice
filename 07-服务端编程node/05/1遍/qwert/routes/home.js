const express=require('express')

const home=express.Router()


home.get('/index',(req,res)=>{
    res.send('文章首页')
})
home.get('/list',(req,res)=>{
    res.send('文章列表')
})

module.exports=home
const express=require('express')
const app=express()
const fs=require('fs')
//同步报错（主动报错）
app.get('/index',(req,res)=>{
    throw Error('程序发生未知错误')
})
// 异步报错
app.get('/ceshi',(req,res,next)=>{
    fs.readFile('bucundzaide.txt','uft8',(err,result)=>{
        next(err)
    })
})


app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
app.listen(3000,()=>{
    console.log('服务器启动成功');
    
})
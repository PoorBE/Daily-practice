const express=require('express')
//创建服务器
const app=express()
// app.get（路由，回调函数）
app.get('/request',(req,res,next)=>{
    res.name="韩浩东"
    next()
})
app.get('/request',(req,res)=>{
   res.send(res.name)
})
app.listen(3000)
console.log('服务器启动成功')
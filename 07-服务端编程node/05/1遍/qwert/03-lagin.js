const express=require('express')
//创建服务器
const app=express()
// app.get（路由，回调函数）
app.use('/qwer',(req,res,next)=> {
    res.send('滚，正在维护')
})
app.listen(3000)
console.log('服务器启动成功')
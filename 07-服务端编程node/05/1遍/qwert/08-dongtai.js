const express=require('express')
const app=express()


app.get('/index/:type',(req,res)=>[
    res.send(req.params.type)
])

app.listen(3000,()=>{
    console.log('服务器启动成功');
    
})
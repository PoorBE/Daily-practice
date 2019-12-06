const express=require('express')
const app=express()
//引入body-parser模块
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.post('/add',(req,res)=>{
    console.log(req.body);
    
    res.send('req.body')
})

app.listen(3000,()=>{
    console.log('服务器启动成功');
    
})
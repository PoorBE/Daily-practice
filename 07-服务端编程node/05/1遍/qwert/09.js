const express=require('express')
const app=express()
const path=require('path')

app.use('/stitic',express.static(path.join(__dirname,'public')))
app.listen(3000,()=>{
    console.log('服务器启动成功');
    
})
const express=require('express')
const app=express()
const path=require('path')

//1.设置art扩展名的模板使用art-temlpate
app.engine('art',require('express-art-template'))
//2.设置views目录为木板的默认路径
app.set('views',path.join(__dirname,'./views'))
//3.设置express使用的是art-template
app.set('view engine','art')
//公共部分
app.locals.user=[{
    name:'sdf',
    age:20
},{
    name:'dsfs',
    age:42
}]

app.get('/',(req,res)=>{
    res.render('index',{//render渲染模板和数据 返回客户端
        msg:'asdfsafsaf'
    })
})

app.listen(3000,()=>{
    console.log('服务器启动成功');
    
})
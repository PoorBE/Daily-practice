//引入express模块
const express=require('express')
//创建服务器
const app=express()
//格式化日期
const template=require('art-template')
const dateformat=require('dateformat')
template.defaults.imports.dateformat=dateformat
//配置cookie和session
const session=require('express-session')//express中间件
app.use(session({
    secret :'gaoxiangrandashabi',
    resave:true,
    saveUninitialized:false,
    cookie :{//设置cookie失效时间，默认网页关闭就失效
          maxAge:24*60*60*1000
    }
}))
//引入数据库
require('./model/connect')
// 引入body-parser中间件
const bodyParser=require('body-parser')
//配置bodyParser中间件，从而可以通过req.body拿到post数据
app.use(bodyParser.urlencoded({extended:false}))
// require('./model/connect')
const path=require('path')
//访问静态资源
app.use(express.static(path.join(__dirname,'public')))
//配置模板引擎
app.engine('art',require('express-art-template'))
app.set('views',path.join(__dirname,'./views'))//模板文件默认去views去找
app.set('view engine','art') //express可以用很多类型的模板引擎
//引入路由
const home=require('./route/home')
const admin=require('./route/admin')


//~~~~~~~~~~~~~~~~~~~~~~
//实现自动登录
app.use('/admin',async (req,res,next)=>{
    //查出来用户名的ithema对应信息，直接存到session中国
    const {User}=require('./model/user')
    const user=await User.findOne({email:'itheima@itcast.com'})
    req.session.user=user
    next()
})
// ~~~~~~~~~~~~~~~~~~~~~~




// 判断登录状态，登录则放行，未登录，则拦截跳转，写在路由之前
app.use('/admin',require('./middleware/loginGuard'))
//拦截，改变方向
app.use('/home',home)
app.use('/admin',admin)

//错误中间件
// app.use((err,req,res,next) =>{
//     try {
//         var obj=JSON.parse(err)
//         res.redirect(obj.path+'?message='+obj.message)
//     }catch (e) {
//         console.log(e);
//     }
  
// })
app.use((err,req,res,next)=>{
    try{
         // 将字符串解析成对象
     var obj=JSON.parse(err);
     res.redirect(obj.path+'?message='+obj.message)
    }catch(e){
     //    console.log(e);
     //    打印真正的报错信息
        console.log(err);
        
        
    }
 })


//监听端口
app.listen(80,()=>{
    console.log("服务器启动成功，请访问localhost")
    
})
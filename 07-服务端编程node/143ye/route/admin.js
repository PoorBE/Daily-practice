//后台管理
const express=require('express')
//引入第三方密码加密
const bcrypt=require('bcryptjs')
const Joi=require('joi')
//创建前台的路由对象
const admin=express.Router()
//引入用户集合
const {User}=require('../model/user')
//登录路由
admin.get('/login',(req,res)=>{
    res.render('admin/login',{})
})
//实现用户登录功能
admin.post('/login',async (req,res)=>{
   var {email,password}=req.body
    if (email.trim().length==0 ||password.trim().length==0)  return res.status(400).render('admin/error',{msg:'邮箱或密码错误，请重新输入'})

    //将用户输入的数据与数据库中的数据进行对比判断
    const user=await User.findOne({email})
    //如果user存在，则返回一个对象，不存在则为空
    if (user) {
        //邮箱写对了
        // bcrypt.compare('明文'，加密)
       const siValid=await bcrypt.compare(password,user.password)//返回一个布尔值 true false
        if (siValid) {
            //吧用户信息存到session里面 session类似全局变量
            // session每次服务器重启就会清空
            req.session.user=user
            req.app.locals.userInfo=user
            // 重定向，跳转到用户界面
            res.redirect('/admin/user')
        } else {
            return res.status(400).render('admin/error',{msg:'邮箱或密码错误'})
        }
    } else {
        return res.status(400).render('admin/error',{msg:'邮箱或密码错误'})
    }
})
//删除用户
admin.get('/logout',(req,res)=>[
    //删除session 
    req.session.destroy(()=>{
        //删除cookie
        res.clearCookie('connect.sid')
        //重定向到用户登录页面
        res.redirect('/admin/login')
    })
])
// 用户列表
admin.get('/user',async(req,res)=>{
    var page = req.query.page || 1//默认是1，没有传第几页默认第一页假设的页数
    var pagesize=4 //每页显示几条数据

    var total =await User.countDocuments()//查询数据库数据总条数
  
    
    total =Math.ceil(total/pagesize) //总页数 除不尽 +1页
    
    const list =await User.find().limit(pagesize).skip(pagesize*(page-1))
    
    res.render('admin/user',{user:req.session.user,list:list,total:total})
})

//添加用户界面
admin.get('/user-add',(req,res)=>{
    const message=req.query.message

    res.render('admin/user-add',{message:message})
})
//接收用户添加数据
admin.post('/user-add',async (req,res,next)=>{
    // next() 代表的是放行
    // next('abc') 直接跳到错误处理中间件
    // return;
    // 校验规则
    const schema = {
        username:Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email:Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码不符合要求')),
        role:Joi.string().valid('normal','admin').required().error(new Error('角色值不符合要求')),
        state:Joi.number().valid(0,1).required().error(new Error('状态值非法'))
      }
     const {error,value} = Joi.validate(req.body,schema)
     if(error){//如果出错了
         //出错了就重新跳转回添加用户页面
         //post方式一般指的是表单提交
        //  return res.redirect('/admin/user-add?message='+error.message)//通过get传递参数数据
        //有的页面可能不至传的是两个参数
        //把对象转换成一个数据 

        // 如果出错了，不要自己去解决，而是交给错误 处理中间件
        return next(JSON.stringify({
            path:'/admin/user-add',
            message:error.message
        }))
     }
    //  1. 通过当前用户输入的邮箱去查询数据库，如果查询出来是有值，说明是重复了，否则说明没有重复
    // 2. 没有重复说明可以是添加，调用User.create去存到数据库
    const user = await User.findOne({email:req.body.email})
    if(user){
        // return res.redirect('/admin/user-add?message=邮箱重复了')
        return next(JSON.stringify({
            path:'/admin/user-add',
            message:'邮箱重复了'
        }))
    }else{
        // 对用户输入的密码进行加密
        const bcrypt = require('bcryptjs')
        const str = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password,str)//加密之后密码
        //存数据库
        await User.create(req.body)
        res.redirect('/admin/user')
    }
})


//修改界面
admin.get('/user-edit',(req,res)=>{
    res.render('admin/user-edit')
    
})
//文章界面
admin.get('/article',(req,res)=>{
    res.render('admin/article')
})
//添加文章界面
admin.get('/article-add',(req,res)=>{
    res.render('admin/article-add')
})
// 文章编辑
admin.get('/article-edit',(req,res)=>{
    res.render('admin/article-edit')
})

//开放出去
module.exports=admin
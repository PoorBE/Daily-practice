//后台管理
const express=require('express')
const path=require('path')
//引入第三方密码加密
const bcrypt=require('bcryptjs')
const Joi=require('joi')
//创建前台的路由对象
const admin=express.Router()
//引入用户集合和文章集合
const {User}=require('../model/user')
const {Article}=require('../model/article')
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
    req.app.locals.current='user'

   let page = req.query.page || 1//默认是1，没有传第几页默认第一页假设的页数
   let pagesize=4 //每页显示几条数据

   let total =await User.countDocuments()//查询数据库数据总条数
 
    total =Math.ceil(total/pagesize) //总页数 除不尽 +1页
    
    const list =await User.find().limit(pagesize).skip(pagesize*(page-1))
    
    res.render('admin/user',{user:req.session.user,list:list,total:total,page:page})
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
admin.get('/user-edit',async (req,res)=>{
    //获取当前地址栏的id值
    const _id=req.query.id
    //根据id值找出对应的数据
    const user=await User.findOne({_id})
    const message=req.query.message
    res.render('admin/user-edit',{user:user,message:message})
})
//处理提交用户修改的路由
admin.post('/user-edit', async (req,res)=>{
   //只有当用户输入的密码与数据库中的密码一致。采取做update更新
   //查询出数据库中的用户的密码
   const _id=req.body._id//影藏输入框中传来的_id值
   const user=await User.findOne({_id})//通过id值查询出这条数据
   let isValid=await bcrypt.compare(req.body.password,user.password)//返回布尔值
   if(isValid) {
        //更新数据的时候把密码剔除，密码是不需要修改的不剔除的话，密码显示的事明文
        delete req.body.password
        await User.updateOne({_id},req.body)
    //修改成功后返回用户界面
    return res.redirect('/admin/user')       
   } else {
   res.redirect('/admin/user-edit?id='+_id+'&message=密码错误')
   }
})
//删除用户路由
admin.post('/user-remove',async (req,res)=>{
    //获取要删除用户的id
    const _id=req.body._id
    await User.findOneAndDelete({_id})
    //删除成功会跳回用户列表页
    res.redirect('/admin/user')
})
//显示文章界面
admin.get('/article',async (req,res)=>{
    req.app.locals.current='article'
    const page=req.query.page||1//当前页码数
    //引入页码生成插件
    const pagination=require('mongoose-sex-page')
    // const article =  await Article.find().populate('author')
    const article =  await pagination(Article).page(page).size(3).display(4).populate('author').exec()
    
   
   
    
    res.render('admin/article',{article})
})
//添加文章界面
admin.get('/article-add',(req,res)=>{
    res.render('admin/article-add')
})
//文章提交
admin.post('/article-add',(req,res)=>{
   //formidable可以传二进制文件
   const formidable=require('formidable')
   const form=new formidable.IncomingForm()//和用户提交的表单进行映射
   form.uploadDir=path.join(__dirname,'../public/uploads')//设置上传文件的存放地址
   form.maxFieldsSize=1024*1024*1024//文件上传的最大大小一个g
   form.keepExtensions=true//上传的文件带后缀
   //变淡的数据类型有两种，一种是普通数据类型，一种是二进制类型
   form.parse(req,async (err,fields,files)=>{
      //往数据库传数
      await Article.create({
        title:fields.title,
        author:fields.author,
        publishDate:fields.publishDate,
        cover:files.cover.path.split('public')[1],
        content:fields.content 
    })
    //跳转到文章列表页
    res.redirect('/admin/article')
   })
})





// 文章编辑
admin.get('/article-edit',(req,res)=>{
    res.render('admin/article-edit')
})

//开放出去
module.exports=admin
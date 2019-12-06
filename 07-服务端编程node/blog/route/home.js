// 前台
const express=require('express')
//创建前台的路由对象
const home=express.Router()
// 引入列表数据
const {Article}=require('../model/article')
const pagination=require('mongoose-sex-page')
// 首页列表页
home.get('/',async (req,res)=>{
    var page=req.query.page ||1
    const article=await pagination(Article).page(page).size(3).display(4).populate('author').exec()
  
    
   res.render('home/default',{article})
})

// 详情页
home.get('/detail', async (req,res)=>{
    var _id = req.query.id 
 
    //根据id查询当前这篇文章
    const article = await Article.findOne({_id}).populate('author')

    res.render('home/article',{article})
})
module.exports=home
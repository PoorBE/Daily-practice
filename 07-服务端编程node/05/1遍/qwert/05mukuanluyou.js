const express=require('express')
const app=express()

const admin=require('./routes/admin')
const home=require('./routes/home')
//创建一级路由
admin.use('admin',admin)
home.use('home',home)
app.listen(3000)
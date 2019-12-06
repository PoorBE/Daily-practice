module.exports=(req,res,next)=>{
    //当客户端访问的不是login或者用户是未登录则跳回登录界面，否则放行
    if (req.url!='/login'&& ! req.session.user) {
        res.redirect('/admin/login')
    } else {
        next()
    }
}


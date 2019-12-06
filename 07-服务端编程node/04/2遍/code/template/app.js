const http=require('http')
const template=require('art-template')
const path=require('path')
const dateformat=require('dateformat')
template.defaults.imports.dateformat=dateformat
//创建服务器
const app=http.createServer()

app.on("request",(req,res) =>{
    if(req.url=='/'||req.url=='/index') {
        const index = template(path.join(__dirname, './view/index.art'), {})
        res.end(index)
    } else if(req.url=='/list') {
        const list = template(path.join(__dirname, './view/list.art'), {lis:[
            {title:'第一篇文章的标题',time:Date.now()},
            {title:'第二篇文章的标题',time:Date.now()},
            {title:'第三篇文章的标题',time:Date.now()},
            {title:'第四篇文章的标题',time:Date.now()}
        ]})
        res.end(list)
    } else {
        res.end('404,not found')
    }
})

//服务器监听

app.listen(3000);
console.log('服务器启动成功');





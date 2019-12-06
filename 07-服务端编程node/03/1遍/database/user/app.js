const http = require('http');
const url = require('url');
const querystring = require('querystring')
    //创建服务器
const app = http.createServer();
//连接数据库
require('./model/index')
    // 创建用户集合
const User = require('./model/user')

//监听
app.listen(3000);

//绑定事件
app.on("request", async(req, res) => {

    //路由处理：请求方式+请求地址‘
    const method = req.method;
    const { pathname, query } = url.parse(req.url, true)
        // 判断：请求地址+请求方式
    if (method == "GET") {
        if (pathname == '/list') {
            //访问数据库，获取所有用户
            let users = await User.find();
            // html头部
            let list = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
                        `;
            // html中间部分
            users.forEach(item => {
                    list += `<tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td> `;


                    //爱好
                    item.hobbies.forEach(ele => {
                        list += `<span>${ele}</span> `
                    });


                    list += `</td>
                <td>${item.email}</td>
                <td>
                    <a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                    <a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
                </td>
            </tr>`;
                })
                // html尾部
            list += ` </table>
                            </div>
                            </body>
                            </html>
                        `;
            res.end(list)
        } else if (pathname == '/add') {
            let add = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>添加用户</h3>
                    <form method="post" action="/add">
                      <div class="form-group">
                        <label>用户名</label>
                        <input name="name" type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input name="password" type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input name="age" type="text" class="form-control" placeholder="请填写年龄">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input type="email" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="足球" name="hobbies"> 足球
                            </label>
                            <label class="checkbox-inline">
                              <input name="hobbies" type="checkbox" value="篮球" > 篮球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
                            </label>
                            <label class="checkbox-inline">
                              <input type="checkbox" value="烫头" name="hobbies"> 烫头
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            </html>`;
            res.end(add)
        } else if (pathname == '/modify') { //显示修改用户界面
            //通过_id获取单个用户
            let user = await User.findOne({ _id: query.id })
            let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆']
            let modify = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>修改用户</h3>
                    <form method="post" action="/modify?id=${user._id}">
                      <div class="form-group">
                        <label>用户名</label>
                        <input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写年龄">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input value="${user.email}" type="email" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>
                           
                          
                       `;
            hobbies.forEach(item => {
                //判断你的爱好是否包含当前爱好！
                let isHobby = user.hobbies.includes(item);
                if (isHobby) {
                    modify += ` <label class="checkbox-inline">
                        <input type="checkbox" value="${item}" name="hobbies" checked> ${item}
                      </label>`
                } else {
                    modify += ` <label class="checkbox-inline">
                    <input type="checkbox" value="${item}" name="hobbies"> ${item}
                  </label>`
                }
            })
            modify += `
                       </div>
                       </div>
                       <button type="submit" class="btn btn-primary">修改用户</button>
                     </form>
                 </div>
             </body>
             </html>`;
            res.end(modify)
        } else if (pathname == '/remove') {
            //删除用户 ，重定向
            await User.findOneAndDelete({ _id: query.id })
            res.writeHead(301, {
                Location: '/list'
            })
            res.end();
        }
    } else if (method == "POST") {
        //add路由  添加用户 
        if (pathname == '/add') {
            let formData = '';
            req.on("data", param => {
                formData += param;
            });
            req.on("end", async() => {
                const user = querystring.parse(formData);
                //保存到数据库
                await User.create(user)
                    //重定向：请求头设置+数据发送
                res.writeHead(301, {
                    Location: '/list'
                })
                res.end()
            })
        } else if (pathname == '/modify') {
            let formData = '';
            req.on("data", param => {
                formData += param;
            });
            req.on("end", async() => {
                const user = querystring.parse(formData);
                //保存到数据库
                await User.updateOne({ _id: query.id }, user)
                    //重定向：请求头设置+数据发送
                res.writeHead(301, {
                    Location: '/list'
                })
                res.end()
            })

        }
    }
})
// 1.引入系统模块http
// 2.创建网站服务器
// 3.为网站服务器对象添加请求事件
// 4.实现路由功能
// 	1.获取客户端的请求方式
// 	2.获取客户端的请求地址
const http = require('http');
const url = require('url');

const app = http.createServer();

app.on('request', (req, res) => {
    // 获取请求方式路由：1.请求方式 2.请求地址
    let method = req.method.toLowerCase();
    let pathname = url.parse(req.url).pathname;
    //设置相应头信息
    res.writeHead(200, {
        "content-type": "text/html;charset=utf8"
    });
    //判断：请求方式和请求地址
    if (method == 'get') {
        //地址判断，不一样的地址，功能不同
        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到我们的首页')
        } else if (pathname == '/list') {
            res.end('欢迎来到我们的列表页')
        } else {
            res.end('你访问的页面不存在')
        }
    } else if (method == 'post') {

    }
});

app.listen(3000);
console.log('服务器启动成功')
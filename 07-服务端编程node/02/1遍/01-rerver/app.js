//1.引包
//2.创建
//3.绑定
//4.监听


//1.引包
const http = require('http');
const url = require('url');
//2.创建
const app = http.createServer();
//3.绑定
app.on('request', (req, res) => {
        //响应信息设置： 状态码+响应头
        res.writeHead(200, {
                "content-type": "text/html;charset=utf8"
            })
            //get请求参数的获取 参数1：要解析的资源路径 参数2：参数是否转换为对象类型
        let { query, pathname } = url.parse(req.url, true);
        console.log(req.url);
        console.log(query.name, query.age);


        //请求头
        // console.log(req.headers.accept); //req.headers["accept"]

        //请求行--请求地址（资源路径）
        // console.log(req.url); //所有资源路径都已/为开头！！！
        if (pathname == '/index' || pathname == '/') {
            res.end('<h2>张崇超傻逼</h2>')
        } else if (pathname == '/list') {
            res.end('Welcome to my list')
        } else {
            res.end('not found')
        };
        //一次请求只能发送一次相应end();end()不能切断函数！！return可以！！
        //请求行---请求方式
        // console.log(req.method);
        if (req.method == 'GET') {
            res.end('GET');

        } else if (req.method == 'POST') {
            res.end('POST');
        };

        // res.end('<h2>Hello LoserZCC</h2>')
    })
    //4.监听
app.listen(3000);
console.log('服务器已开启');
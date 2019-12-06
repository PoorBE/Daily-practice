//1.引包
//2.创建
//3.绑定
//4.监听


//1.引包
const http = require('http');
const querystring = require('querystring')
    //2.创建
const app = http.createServer();
//3.绑定
app.on('request', (req, res) => {
        //获取post参数  两个时间开始data事件 结束end事件
        let postParams = ""; //定义一个空字符串
        req.on("data", params => {
            postParams += params;
        });
        req.on("end", () => {
                console.log(querystring.parse(postParams));

            })
            //要相应客户端  
        res.end('哈哈哈哈哈哈')
    })
    //4.监听
app.listen(3000);
console.log('服务器已开启');
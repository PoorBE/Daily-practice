const fs = require('fs');
//创建promise对象
let promise = new Promise((resolve, reject) => {
        fs.readFile('./01.txt', 'utf8', (err, result) => {
            //判断
            if (err == null) {
                resolve(result) //读取到了内容。而后用resolve传出去正确的事
            } else {
                reject(err) //内容读取失败，而后应reject吧错误信息传出去
            }
        })
    })
    //用promise对象，处理异步函数传出来的值
promise.then(result => {
    console.log(result);

}).catch(err => {
    console.log(err);

})
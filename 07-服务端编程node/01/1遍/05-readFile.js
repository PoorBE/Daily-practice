//读取
const fs = require('fs');
fs.readFile('./01-nodejs.js', 'utf8', (err, doc) => {
    console.log(err); //读取正确为null，错误的话是一个对象。包含错误信息
    console.log(doc); //doc是读取结果

})
const fs = require('fs');
const aaa = '66666';
fs.writeFile('./demo.txt', aaa, err => {
    if (err != null) {
        console.log(err);
        return
    }
    console.log('文件写入成功');

})
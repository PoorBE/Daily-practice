const mongoose = require('mongoose'); // 引入mongoose第三方模块 用来操作数据库
// 数据库连接
mongoose.connect('mongodb://localhost:27017/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));
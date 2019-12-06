//连接数据库
// 引入第三方模块mongoose
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex:true})
        .then(()=>console.log('数据库连接成功'))
        .catch(()=>console.log('数据库连接失败'))
const mongoose=require('mongoose')

//连接mongodb数据库
mongoose.connect('mongodb://localhost/blog',{  useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex:true})
    .then(()=>console.log('数据库连接成功'))
    .catch(err=>console.log(err,'数据库连接失败'))
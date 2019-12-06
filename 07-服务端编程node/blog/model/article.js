// 1. 引用mongoose模块
const mongoose = require('mongoose');
// 2. 创建文章集合规则
//创建集合规则 数组中每一个对象的数据结构的描述 模子 
//Schema 定义数据的结构
const mySchema = new mongoose.Schema({
  //name:String  简写方式
  //name:{type:String,required:[true:'请传入用户名']}  完整写法
  title:{
    type:String,
    maxlength:20,
    minlength:4,
    required:[true,'请填写文章标题']
  },
  author:{
      //关联集合
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'请传递作者字段']
  },
  publishDate:{
    type:Date,
    default:Date.now 
  },
  cover:{
    type:String,
    default:null 
  },
  content:{
    type:String 
  }
});

//根据集合规则去数据库中创建对应的空的集合[数组] 饼干
//集合名称首字母必须大写，例如:Course 在数据库中会自动生成courses这种复数形式
//Model 由Schema生成的构造函数，我们可以用它来new一个document对象，也就是向数组中增加document对象，直接用它身上的静态方法create来对数据进行增删改查
const Article = mongoose.model('Article',mySchema)
// 3. 根据规则创建集合
// 4. 将集合规则作为模块成员进行导出
module.exports = {
  Article 
}
// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        //必选字段
        required: [true, '请填入标题'],
        //字符串最小长度
        minlength: [2, "最小长度为2"],
        //字符串最大长度
        maxlength: 5,
        //取出字符串两边空格
        trim: true
    },
    age: {
        type: Number,
        //最小数字
        min: 18,
        //最大数字
        max: 100
    },
    publishDate: {
        type: Date,
        //用户为传参数则使用默认值
        default: Date.now
    },
    category: {
        type: String,
        //枚举 列举出当前字段可以拥有的值
        enum: {
            values: ['html', '我是你爸爸', '高翔然是我儿子'],
            message: '分类名不正确'
        }
    },
    author: {
        type: String,
        validate: {
            validator: v => {
                // 返回布尔值
                // true 验证成功
                // false 验证失败
                // v 要验证的值
                return v && v.length > 4
            },
            // 自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});

const post = mongoose.model('Post', postSchema);

post.create({ title: "aaa", age: 20, category: "高翔然是我儿子", author: "addss" })
    .then(result => console.log(result))
    .catch(error => {
        //获取错误信息
        const err = error.errors;
        //训话错误信息对象
        for (var attr in err) {
            //打印错误信息
            console.log(err[attr]['message']);
        }
    })
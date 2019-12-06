const template = require('art-template');
const path = require('path')
    // const html = template('')

const data = {
        name: "张三",
        score: 59,
        checked: true,
        content: '<h1>我叫李思</h1>',
        user:[{
            name:'zs',
            age:14
        },{
            name:'ls',
            age:20
        }]
    }
    // template('模板路径',数据（一定是对象）)
const html = template(path.join(__dirname, './view/index1.art'), data)
console.log(html);
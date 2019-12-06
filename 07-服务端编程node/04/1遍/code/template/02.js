const template = require('art-template');
const path = require('path')
const dateformat=require('dateformat')
template.defaults.imports.dateformat=dateformat;
    // template('模板路径',数据（一定是对象）)
var html = template(path.join(__dirname, './view/a.art'), {time:Date.now()})
console.log(html);
var html = template(path.join(__dirname, './view/b.art'), {})
console.log(html);




// const template = require('art-template')
// const path = require('path')
// // template('模板的路径',数据(一定要是对象))
// var html = template(path.join(__dirname,'./views/a.art'),{})
// console.log(html)


// var html = template(path.join(__dirname,'./views/b.art'),{})
// console.log(html)

// // xss攻击：跨站脚本攻击
// // js css formater
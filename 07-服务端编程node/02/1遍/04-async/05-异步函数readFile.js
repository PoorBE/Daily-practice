const fs = require('fs');
//改造现有异步函数api，让其返回promise对象，从而支持异步函数语法
const promisify = require('util').promisify;
//调用promisify方法改造现有异步api 让其返回promise对象
const readFile = promisify(fs.readFile);
async function run() {
    let r1 = await readFile('./01.txt', 'utf8')
    let r2 = await readFile('./02.txt', 'utf8')
    let r3 = await readFile('./03.txt', 'utf8')
    console.log(r1, r2, r3);
}
run()
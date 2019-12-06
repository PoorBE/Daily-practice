const greeting = name => 'Hello${name}';
const x = 100;
exports.x = x;
exports.greeting = greeting;
module.exports.greeting = greeting;
module.exports = {
    name: 'zhangsan'
}
exports = {
    age: 20
}
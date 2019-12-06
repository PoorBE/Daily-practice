global.setTimeout(function() {
    console.log(123);

}, 2000)
global.console.log('123');
setTimeout(function() {
    console.log(456);

}, 2000)
console.log('561');
console.log(global);
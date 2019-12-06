function getMsg(callback) {
    setTimeout(() => {
        callback({
            msg: "我是你爸爸"
        })
    }, 2000);
}
getMsg(function(data) {
    console.log(data);
});
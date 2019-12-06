window.addEventListener('load', function() {
    var regtel = /^1[34578]\d{9}$/; //手机号码正则表达式
    var regqq = /^[1-9]\d{4,}/; //QQ号码正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}/; //昵称正则表达式
    var regmsg = /^\d{6}$/; //短信正则表达式
    var regpwd = /^[\w-]{6,16}$/; //密码正则表达式

    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var mesg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd')
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(nc, regnc);
    regexp(msg, regmsg);
    regexp(pwd, regpwd);
    //验证正确与否
    function regexp(ele, ele) {
        ele.addEventListener('blur', function() {
            if (ele.test(this.value)) {

                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入'
            }
        })
    }
    surepwd.onblur = function() {
        if (this.vluae == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不一致，请重新输入'
        }
    }
})
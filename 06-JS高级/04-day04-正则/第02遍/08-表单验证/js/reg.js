window.onload = function() {
        var regtel = /^1[35784]\d{9}$/ //手机号正则
        var regqq = /^[1-9]\d{4,}$/; //QQ号码正则
        var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称正则
        var regmsg = /^\d{6}$/; //短信验证码正则
        var regpwd = /^[\w-]{4,12}$/; //密码正则
        var tel = document.querySelector('#tel');
        var qq = document.querySelector('#qq');
        var nc = document.querySelector('#nc');
        var msg = document.querySelector('#msg');
        var pwd = document.querySelector('#pwd');
        var surepwd = document.querySelector('#surepwd')
        regext(tel, regtel);
        regext(qq, regqq);
        regext(nc, regnc);
        regext(msg, regmsg);
        regext(pwd, regpwd);
        //失去焦点事件
        //封装函数
        function regext(ele, reg) {
            ele.onblur = function() {
                if (reg.test(this.value)) {
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
                } else {
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入'
                }
            }
        }
        surepwd.onblur = function() {
            if (this.value == pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一致，请重新输入'
            }
        }
    }
    // if (ele.test(this.value)) {

//     this.nextElementSibling.className = 'success';
//     this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确'
// } else {
//     this.nextElementSibling.className = 'error';
//     this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入'
// }
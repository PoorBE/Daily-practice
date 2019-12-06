window.onload = function() {
        var regtel = /^1[34578]\d{9}$/; //手机号正则
        var regqq = /^[1-9]\d{5,}$/; //qq号正则
        var regpwd = /^[\w-]{6,16}$/; //密码正则

        //获取元素
        var tle = document.querySelector('#tel');
        var qq = document.querySelector('#qq');
        var pwd = document.querySelector('#pwd');
        var surepwd = document.querySelector('#surepwd');
        //封装验证正则函数
        getReg(tel, regtel);
        getReg(qq, regqq);
        getReg(pwd, regpwd);

        function getReg(ele, reg) {
            ele.onblur = function() {
                if (reg.test(this.value)) {
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
                } else {
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
                }
            }
        }
        surepwd.onblur = function() {
            if (this.value == pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码输入不一致，请重新输入';
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
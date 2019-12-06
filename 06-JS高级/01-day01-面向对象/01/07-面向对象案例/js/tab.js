var that;
class Tab {
    //获取元素，用于属性绑定
    constructor(id) {
            that = this;
            this.main = document.querySelector(id);

            //获取添加按钮和ul和section的父亲
            this.add = this.main.querySelector(".tabadd");
            this.ul = this.main.querySelector(".fisrstnav ul:first-child");
            this.fsection = this.main.querySelector(".tabscon")
            this.init()
        }
        //获取所有的li和section,删除按钮，包括新生成的
    updateNode() {
            this.lis = this.main.querySelectorAll("li");
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi')
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        }
        //初始化，调用的时候给每个li绑定点击事件
    init() {
            this.updateNode();
            //给add绑定点击事件
            this.add.onclick = this.addTab //点击后调用addClass里的函数
                //利用for循环绑定各种事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab; //点击后调用toggleTab里的函数
                this.remove[i].onclick = this.removeTab; //点击后调用removeTab里的函数
                this.spans[i].ondblclick = this.editTab; //双击后动用editTab里的函数
                this.sections[i].ondblclick = this.editTab;

            }
        }
        //清除所有的li和section的类名
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        //切换功能
    toggleTab() {
            //这里的this指向lis
            // console.log(this.index);this.index为索引号
            //干掉所有人
            that.clearClass() //that指向实例对象
                //排他保留自己
            this.className = 'liactive'
            that.sections[this.index].className = 'conactive'
        }
        //添加功能
    addTab() {
            //此处this指向事件源
            //排他思想
            that.clearClass()
                //创建新的标签
            var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">' + Math.random() + '</section>'
                //将创建的新标签添加到父元素中
                // element.insertAdjacentHTML('位置', 新元素)
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            //给创建的新元素初始化，为的是给信元素绑定该有的事件
            that.init();
        }
        //删除功能
    removeTab(e) {
            e.stopPropagation(); //首先阻止冒泡，防止触发父亲li的点击事件
            var index = this.parentNode.index; //获取父元素的索引号
            //移除对应的父元素
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            //删除不是选中的li，就不用选中前一个，return终止后面自动点击事件
            if (document.querySelector('.liactive')) return;
            // index > 0 && index--; //index必须大于0
            index--;
            //手动调用
            that.lis[index] && that.lis[index].click();
            //若果有索引号对应的元素，则执行点击事件没有则不执行

        }
        //修改功能
    editTab() {
        var str = this.innerHTML; //保留原有文字
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // 只要一双击，就生成一个文本框
        this.innerHTML = '<input type="text">'
        var input = this.children[0]; // 获取input元素
        input.value = str;
        input.select(); //文本框里的文字默认选中状态
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                //如果回车弹起，手动调用失去焦点事件
                this.blur();
            }
        }
    }

}
//创建实例对象
new Tab("#tab")
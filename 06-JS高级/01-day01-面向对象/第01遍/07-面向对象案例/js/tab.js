var that;
class Tab {
    constructor(id) {
            that = this;
            //获取元素
            this.main = document.querySelector(id)
                //添加按钮和li的父亲和section父亲
            this.add = this.main.querySelector('.tabadd')
            this.ul = this.main.querySelector('.fisrstnav ul:first-child')
            this.fsection = this.main.querySelector('.tabscon')
            this.init()
        }
        //获取所有的li和section,删除按钮，包括新生成的
    upAll() {
        this.lis = this.main.querySelectorAll(' li');
        this.sections = this.main.querySelectorAll('.tabscon section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
        console.log(this.spans);


    }
    init() {
            //要先调用一下获取元素
            this.upAll()
                //给add添加点击事件
            this.add.onclick = this.addTab;
            // 初始化，给每个现有的或新生成得元素添加该有的事件
            //给每个lis，sections。添加事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.changeTab;
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.alterTab;
                this.sections[i].ondblclick = this.alterTab;
            }
        }
        //清除所有的li，section的样式
    clearClass() {
            //利用for循环
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        //切换
    changeTab() {

            that.clearClass();
            this.className = 'liactive'
            that.sections[this.index].className = 'conactive'
        }
        //添加
    addTab() {
            that.clearClass()
            var li = ' <li class="liactive"><span>新添加模块</span><span class="iconfont icon-guanbi"></span></li>'
            var section = ' <section class="conactive">' + Math.random() + '</section>'
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init()
        }
        //删除
    removeTab(e) {
            //首先阻止冒泡，避免触发li的点击事件
            e.stopPropagation();
            var index = this.parentNode.index; //获取父亲的索引号
            that.lis[index].remove();
            that.sections[index].remove();
            that.init()
            if (document.querySelector('.liactive')) return;
            index--;
            that.lis[index] && that.lis[index].remove();

        }
        //修改功能
    alterTab() {
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        var str = this.innerHTML; //获取原本的内容
        this.innerHTML = '<input type="text">'; //生成一个文本框
        var input = this.children[0]; //获取input元素
        input.value = str;
        input.select();
        input.onblur = function() {
                this.parentNode.innerHTML = this.value //这里的this指向input
            }
            //按下回车
        this.onkeyup = function(e) {
            if (e.keyCode == 13) {
                input.blur()
            }
        }

    }
}
new Tab("#tab")
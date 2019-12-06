var that;
class Tab {
    constructor(id) {
        that = this;
        //获取元素
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul')
        this.fsection = this.main.querySelector('.tabscon')

        this.init()
    }
    upAll() {
            this.lis = this.main.querySelectorAll('.fisrstnav li');
            this.sections = this.main.querySelectorAll('.tabscon section')
                //获取删除按钮
            this.del = this.main.querySelectorAll('.icon-guanbi')
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
        }
        //初始化
    init() {
            that.upAll()
            this.add.onclick = this.addTab;
            //利用for循环给该有事件的元素添加点击事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i; //添加自定义属性，为了给li加上索引号
                this.lis[i].onclick = this.changeTab;
                this.del[i].onclick = this.delTab;
                this.sections[i].ondblclick = this.inputTab;
                this.spans[i].ondblclick = this.inputTab;
            }
        }
        //清除功能
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = ''
                this.sections[i].className = ''
            }
        }
        //切换功能
    changeTab() {
            that.clearClass()
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive'
        }
        //添加功能
    addTab() {
            that.clearClass()

            //添加前先清除一下样式
            var li = ' <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">' + Math.random() + '</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            //给新添加的元素进行初始化，绑上点击事件
            that.init()
        }
        //删除功能
    delTab(e) {
            e.stopPropagation(); //清除冒泡，防止触发li的点击事件
            var index = this.parentNode.index;
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();

            if (document.querySelector('.liactive')) return;
            index--;
            that.lis[index] && that.lis[index].remove();
        }
        //更改功能
    inputTab() {
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //获取父元素的索引号和内容
        var str = this.innerHTML;
        this.innerHTML = '<input type="text">';
        var input = this.children[0]; //获得input元素
        input.value = str;
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                input.blur(); //手动执行input失去焦点事件
            }
        }
    }
}
new Tab('#tab')
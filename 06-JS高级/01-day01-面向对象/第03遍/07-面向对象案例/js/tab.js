var that;
class Tab {
    constructor(id) {
            that = this;
            this.main = document.querySelector(id);
            this.add = this.main.querySelector('.tabadd');
            this.ul = this.main.querySelector('.fisrstnav ul');
            this.fsection = this.main.querySelector('.tabscon')
            this.init();
        }
        //获取事件元素
    upAll() {
            this.lis = this.main.querySelectorAll('.fisrstnav li');
            this.sections = this.main.querySelectorAll('.tabscon section');
            this.delbtn = this.main.querySelectorAll('.fisrstnav ul .icon-guanbi')
        }
        //初始化
    init() {
            that.upAll()
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.changeTab;
                this.delbtn[i].onclick = this.delTab;
            }
        }
        //清除样式
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                that.sections[i].className = '';
            }
        }
        //切换功能
    changeTab() {
            that.clearClass()
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        //添加功能
    addTab() {
            that.clearClass();
            var li = ' <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '  <section class="conactive">' + Math.random() + '</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        //删除功能
    delTab(e) {
        e.stopPropagation(); //清除冒泡，防止触发li的点击事件
        var index = this.parentNode.index;
        console.log(index);

        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (that.lis.className == 'liactive') return;
        // if (document.querySelector('.liactive')) return;
        // index--;
        // that.lis[index] && that.lis[index].remove();
    }
}
new Tab('#tab');
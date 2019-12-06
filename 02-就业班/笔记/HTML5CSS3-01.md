# HTML5CSS3-01

## 今日知识

1. 什么是HTML5
2. HTML5新增的标签
3. HTML5新增的表单元素
4. CSS3 属性选择器
5. CSS3 结构选择器 
6. CSS3 伪元素
7. CSS3-2D转换（位移）


### H5 

- html5是对html的第五次重大修改, 广义上 html5 =  html5标签 + css3样式 + js行为 
- 兼容性 谷歌 火狐  苹果  欧朋   ie9以下   不支持  ie9选择性支持 

### 语义化标签 （重点！）

- **特点 在ie9以下 不支持  ie9 选择性支持   在ie9以下兼容处理  不只是转为块元素  还需要搭配js来操作**


- 头部标签   header  
- 导航标签 nav 
- 主体 main      ----- ie浏览器中统一不识别
- 侧边栏 aside 
- 文章 article 
- 部分 section  块级 
- 底部 footer  


### 多媒体

#### 音频 audio   双标签

- src - 音频的路径 

- controls -  控制面板  

- loop - 循环播放

- autoplay - 自动播放 - ------ 在谷歌浏览器中禁用掉了 (节省用户流量,避免广告) 

  ```html
  <audio src="音频的路径" autoplay controls loop></audio>
  ```

- 优化 因为各个浏览器的识别的文件不同 

  ```html
  <audio >
       type 值 memer类型 可以省略
  	<source src="音频的路径.mp3" type="audio/mpeg"> 
    	<source src="音频的路径.ogg" type="audio/ogg"> 
  </audio>
  ```

#### 视频 video 双标签

- src - 音频的路径 

- controls -  控制面板  

- loop - 循环播放

- autoplay - 自动播放 - ------ 在谷歌浏览器中禁用掉了 (节省用户流量,避免广告)  

- width - 宽度 

- height - 高度 

- poster - 设置视频默认加载的第一帧图片  poster="1.jpg"

- muted - 静音  ---  如果视频添加了静音属性  autoplay属性就可以使用   

- 优化 各个浏览器识别的格式不同  

  ```html
  <video> 
     <source src="1.mp4" type="video/mp4">
     <source src="1.ogg" type="video/ogg">
  </video>
  ```

### 表单 

#### 表单新增的type属性

- 邮箱 - email  内置了验证 邮箱输入的时候必须输入 @ 必须带有域名  xx.com  xx.cn 
- 网络地址 - url  内置了验证  输入的时候必须 添加协议  http://   https:// 
- 日期 - date 
- 时间 - time 
- 日期 + 时间  datetime-local
- **数字 - number  在手机端会调取数字键盘**
  - value - 默认值 
  - min - 最小值
  - max - 最大值
- **电话 - tel   在手机端会调取数字键盘**
- 拾色器 - color
- **搜索 - search  输入数据的文本框最后 删除按钮** 
- 范围 - range

#### 表单其他属性 （重点）

- 必须填 不能为空  内置验证   required  
- 提示占位 placeholder="提示信息" 
- 自动获取焦点 autofocus  
- 自动补全  autocomplete="on /off "
  - 1.必须设置name属性 
  - 2.必须成功提交过
- 多选  multiple  上传控件
- 多选属性为input type="email"   添加的时候  多个邮箱之间用逗号隔开;

#### disabled 和 readonly 的区别

- 两个属性都有禁用的意思  disabled 是绝对的禁用不能和后台进行交互   readonly 只读  和 后台进行交互 

### 选择器

#### 属性选择器 权重10   （重点！）

- 查找某个标签是否含有某个属性  div[class]  
- 查找某个标签的某个属性值是否等于某个值  div[class=a]
- 查找某个标签的某个属性的值以某个值开头  div[class^=a]
- 查找某个标签的某个属性的值包含某个值  div[class*=a]
- 查找某个标签的某个属性的值以某个值结尾 div[class$=a]

#### 相对于父元素的结构伪类选择器 权重10

- **第一个  p:first-child  first-of-type（重点！）**
- **最后一个  p:last-child   last--of-type  （重点！）**
- 第n个  p:nth-child(n)    nth-of-type(n)
  - 如果括号内是取的是数字  n是从1开始   如果括号内写的是公式  n是从0 开始  
  - 括号内公式的计算结果 <=0   查找不到 不会进行css渲染
- 偶数  p:nth-child(even)   (2n)
- 奇数 p:nth-child(odd)   (2n+1) (2n-1) 
- 前5个  p:nth-child(-n+5)  

#### nth-child 与 nth-of-type   （重点！）

- nth-child 只关心数量  不关心标签类型
- nth-of-type   关心标签类型

### 兄弟选择器 -----扩展

- 查找一个兄弟  ( + )        p + h1 {}   找到的一个h1标签标签会生效    **前提 必须指定类型  必须紧紧相邻**【可选择紧接在另一元素后的元素，且二者有相同父元素】
- 查找所有兄弟 ( ~ )        p ~ div  找到所有的div标签会生效   **前提  必须指定类型**

### 伪元素 权重1  (重点！)

- ::before    插入到内容之前
- ::after  插入到内容之后
- **content 属性 必写属性  默认是 行内元素** 不能直接设置宽高   display   float   position  
- **不能使用js来操作的**

### 2D变换 tranform  

- 位移translate 

- 水平和垂直位移   transform:translate(x,y)

- 水平偏移  transform:translate(x,0)  transform:translateX(100px)

- 水平偏移  transform:translate(0,y)  transform:translateY(100px)

- 特点  translate **不会影响其他兄弟元素的位置**      **对于行内元素不起作用**





















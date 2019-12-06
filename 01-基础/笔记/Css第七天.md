# Css第七天

## 今日学习

1.元素的显示与隐藏

2.鼠标样式

3.去除图片底侧空白缝隙

4.精灵图技术

5.滑动门

## 学习目标

- 能说出元素显示隐藏最常见的写法
- 能说出去除图片底侧空白缝隙的方法
- 能说出精灵图产生的目的

- 能使用精灵图技术
- 能用滑动门做导航栏案例



#### 元素的显示与隐藏（重点！） 

-  display -- :block(显示&转换为块级元素)     :none（隐藏&不保留原来位置）【**重要**】
- visibility -- : visible(显示)  :hidden(隐藏元素&保留原来位置)
- overflow --：hidden（隐藏） :scroll(显示滚动条)  :auto（滚动条自适应显示或者隐藏）
  - 重点说一下hidden（**重要**） 1.清除浮动   2.隐藏超出的内容，不允许内容超出父盒子

#### 显示与隐藏总结

**display --显示或者隐藏    隐藏不保留位置      用途广泛**

visibility --显示或者隐藏   隐藏后保留位置      使用较少

overflow -- 一般只用hidden值    隐藏超出的部分       用于清除浮动

#### 鼠标样式

*cursor*: default(默认)    pointer（小手--**记住！**）  move（移动） text（文本）   not-allowed（禁止）

#### 轮廓线

outline：0   或者  none  --去掉轮廓线

#### 防止拖拽文本域（记住！）

resize: none;

#### 用户界面样式总结

鼠标样式    cursor     重点记住pointer

轮廓线        outline    一般都用于去掉它 值为none

防止拖拽     resize      防止拖拽文本域resize:none;

#### vertical-align垂直对齐

vertical-align ：baseline   top   middle    bottom

**作用：通常用于控制图片或者表单与文字之间的对齐方式**     文字和图片默认是基线对齐

**注意：** **只针对行内元素或者行内块元素**

- 去除图片底侧空白缝隙
  - 让图片不要和基线对齐    vertical-align: top middle  bottom
  - 转换成块级别元素  display：block；

#### 溢出的文字省略号显示

- 认识知识点：

1.设置或者检索对象内文本的显示方式

​    white-space    :normal；默认自动换行    :nowrap;强制一行显示(除非遇见br)

2.文字溢出

​    text-overflow    :clip;不显示省略标记     :ellipsis;显示省略标记 .....

- 实现溢出文字省略三步骤
  - 必须强制一行显示   white-space：nowrap;
  - 超出部分隐藏   overflow：hidden;
  - 文字用省略号替代超出的文本    text-overflow:ellipsis;

#### 精灵技术

**目的：为了有效地减少服务器接受和发送请求的次数，提高页面的加载速度**

实现原理： 只请求一张图 --展示的位置不同位置的小图

案例使用：

background-image  背景图片

background-repeat  是否平铺

background-position   背景定位

小小注意点：

1.精灵技术主要针对背景图片，插入的img不需要这个技术

2.需要测量每个小背景图片的大小和位置

3.给盒子指定小的背景图片时，背景定位基本都是负值

## 

#### 制作精灵图(了解)

使用photoshop举例：

1.ctrl+N 新建一个文件创造一个容器    -- 设置宽高 --分辨率72(1pt 点 = 1px )  --背景色透明的

2.打开准备好的各个素材     -- 拖到新建的文件 -- 摆放位置

注意： 1.画布不要太大        2.网页分辨率72px   3.注意保存png透明背景格式

#### 滑动门

总结

1. a 设置 背景左侧，padding撑开合适宽度。 
2. span 设置背景右侧， padding撑开合适宽度  根据文字内容多少撑开宽度。
3. 之所以a包含span是因为 通常整个导航都是可以点击的。

#### margin负值之美

前置知识点：

relativite 相对定位占位置

absolute  绝对定位是不占有位置的

float  浮动不占位置

#### 三角形

必要步骤：

1.宽高为0

2.  4个边框都要写，只保留需要的边框颜色，其余的transparent透明

3. 照顾浏览器兼容   font-size：0;    line-height:0;












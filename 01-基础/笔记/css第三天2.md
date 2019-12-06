# Css第三天

## 今日学习

1.盒子模型概念
2.盒子模型边框
3.盒子模型内边距
4.盒子模型外边距
5.书写规范

## 学习目标

- 能说出盒子模型有那四部分组成
- 能利用边框复合写法给元素添加边框
- 能够说出内边距和外边距作用以及设置相应的值对盒子的影响
- 能利用盒子模型布局写出相应的案例

## 

#### 网页布局的本质

1.利用css设置好盒子的大小-->根据需求摆放盒子的位置

2.把文字图片等填充到盒子里面

#### 盒子模型的组成

- 元素的内容 -- 文字图片等元素
- 边框 -- 盒子的厚度
- 内边距 -- 盒子内容到边框的距离
- 外边距 -- 盒子与盒子之间的距离

#### 盒子边框border

border属性：

- border-width --边框的粗细    单位px
- border-color -- 边框的颜色
- border-style -- 边框的样式
  - none   没有边框
  - solid   单独的实线 
  - dashed   虚线
  - dotted    点线

边框的综合写法 -- border：粗细   样式   颜色；

#### 单独设置边框

举例：上边框

border-top-width   宽度

border-top-style     样式

border-top-color    颜色

border-top：宽度   样式   颜色

剩下的下边框 左边框 右边框 设置的写法一样！

#### 实现表格的细线边框（合并）

- 通过设置cellspacing="0"  单元格与单元格之间的距离
  - **出现问题**：两个单元格之间的表框会重叠 -- 导致边框会加粗。

更好的解决办法：相邻的边框合并 --border-collapse:collapse;

#### 内边距

padding -- 设置内容与边框之间的距离

**特点** -- 内容和边框有了距离    盒子会变大

- padding后面数值不一样情况
  - padding：30px;     上下左右
  - padding：30px  30px;  上下   左右
  - padding：30px  30px   30px;   上  左右  下
  - padding：30px  30px   30px  30px;   上   右  下  左

#### 新浪导航案例

1.设置html结构

2.设置盒子的上下边框 

3.设置里面每一个 a

- display：inline-block；一行显示多个，高度和行高及内外边距都可以控制

#### 盒子的实际大小

盒子的实际的大小 =   内容的宽度(width)和高度(height) +  内边距 (padding)  +  边框 (border)  

- 解决盒子内边距使盒子变大的问题：
  - 盒子的宽度减去内边距的值可以维持盒子原来的大小

**盒子的实际宽高大小也受到css层叠性的影响**

#### padding不影响盒子大小情况

如果没有给一个盒子指定宽度，padding， 不会撑开盒子；但高度相反

#### 外边距margin

margin -- 设置盒子与盒子之间的距离

margin后面数值不一样情况

- margin：30px;     上下左右
- margin：30px  30px;  上下   左右
- margin：30px  30px   30px;   上  左右  下
- margin：30px  30px   30px  30px;   上   右  下  左

#### 块级盒子水平居中

1.**给盒子宽度**

2.左右外边距设置auto（自动）

写法：

1.margin-left：auto；margin：auto;  单独设置左右

2.margin：auto;    上下左右自适应

3.margin:0    auto;   上下为0px;  左右设置为自适应

#### 文字居中和盒子居中区别

text-align：center；-- 实现 **文字居中 行内元素居中  行内块元素水平居中**

**块级盒子居中** -- 把margin左右改为auto；即可。

关于文字设置的扩展：

设置单词与单词之间的距离-- word-spacing:像素px

设置字母和字母汉字与汉字之间的距离 -- letter-spacing：像素px



#### 插入图片和背景图片区别

主要的不同   ---  主要区别体现在移动位置上

插入图片 --- 调整padding 和margin

背景图片 --- 通过背景定位   background-position

复习：

background-position:百分比%   百分比% ;  

background-position:30px          30px;

background-position:top            center

**清除元素的默认内外边距（重要）**

```css
*{
    margin:0;  清除外边距
    padding:0; 清除内边距
}
```

**注意：为了兼容，行内元素只设置左右内外边距，不要设置上下内外边距**

#### 相邻块元素外边距合并

两个盒子关系是 --并列垂直关系

现象描述  --上面盒子下外边距margin-bottom       下面盒子上外边距margin-top

**结果**：**相邻元素垂直外边距合并的距离**   **-- 取两者之中最大的值**(外边距塌陷)  

**解决方法：尽量只给一个盒子添加margin**

#### 嵌套块元素垂直外边距的合并（塌陷）

嵌套关系产生合并塌陷原因：

如果父元素没有上内边距及边框，父元素的上外边距会与子元素的上外边距发生合并

**解决方案：**

1. 可为父元素定义上边框
2. 可为父元素定义上内边距  
3. 可为父元素添加overflow:hidden（暂时了解，后面会细讲）
4. 其他的解决方案 暂时知道 --浮动，固定，绝对定位

#### 盒子模型布局稳定性（了解）

优先使用顺序 --width（计算即可）  > padding(影响盒子大小，要处理)  >  margin（外边距合并塌陷，要处理）

#### PS基本操作和快捷键（基本了解即可）

快捷键介绍  PPT里面粘贴有

#### 新闻列表案例（练习）

**盒子制作**

1.划分结构 --大盒子div（上部分h2+下盒子ul）

2.清除内外边距margin：0；padding：0；

3.开始设置搭建盒子

4.背景设置background：url(images/xx.jpg);

**给大盒子设置padding**

padding：15px; -- **注意盒子变大！！   需要减去对应宽高保持盒子的原样大小**   

**里面标题的制作**

h2标题

**列表制作**

list-style:none;   -- 去掉列表样式

border:width(粗细)   style（样式） color(颜色)

text-decoration:none；去掉下划线

text-decoration:underline；加上下划线

- background：背景颜色   背景图片地址   背景平铺    背景附着   背景定位
  - background-color:颜色值；  默认值是透明色 transparent;
  - background-image:url(图片的地址)  
  - background-repeat :  repeat/no-repeat/repeat-x/repeat-y
  - background-attachment:scroll/fixed； 滚动   固定
  - background-position:x  y;    百分比   具体值px   方位名词top  center  bottom.....

**注意：如果不设置盒子的宽度 --padding不会撑开盒子大小**

#### 扩展（了解）

**圆角边框**

正方形变成圆 --border-radius:数值/百分比     **宽度和高度的一半**

矩形变成椭圆 --border-radius：数值               **高度的一半**

**盒子阴影**

box-shadow:水平阴影距离 垂直阴影距离 模糊距离（虚实）  阴影尺寸（影子大小）  阴影颜色  内/外阴影(默认)；

**注意：**box-shadow的水平阴影和垂直阴影    必须写，其他的根据需求来

**扩展：文字阴影**(**熟记**)

text-shadow: 水平阴影的位置(必需)   垂直阴影的位置(必需)   模糊距离   阴影颜色;

#### 书写规范

1.选择器 与 { 之间必须包含空格

2.属性的 : 与属性值之间要包含空格

3.并集选择器，每个选择器声明必须独占一行

4.属性定义值后必须以分号结尾










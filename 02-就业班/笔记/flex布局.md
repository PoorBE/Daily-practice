# flex布局

## 知识复习

1. 移动端基础  webkit  

2. 视口 

   1. 布局 980

   2. 视觉 

   3. 理想 

      ```html
      <meta name="viewport" content="width=devive-width,inistial-scale=1,user-scalable=no,maximum-scale=1,mimimum-scale=1"> 
      ```

3. 二倍图 background-size  

   1:2   1:3  

   - px  % 
   - cover  始终铺满容器 等比例缩放  可能显示不完整
   - contain  一边占满了 另一边就不再进行缩放了    可能有空白区域

4. 移动端调试  真机    模拟器

5. 移动端技术解决方案 box-sizing 

   - -webkit-tap-highlight-color:transparent;
   - -webkit-appearance:none;
   - -webkit-touch-callout:none; 
   -  box-sizing :border-box  100  = padding + content +border 

6. 移动端常见布局  % 流式布局  flex  rem  响应式

7. 移动端开发之流式布局 

8. 京东移动端首页制作

## 今日内容

1. 京东移动端首页制作
2. flex 布局体验  
3. flex 布局原理
4. flex 布局父项常见属性
5. flex布局子项常见属性
6. 携程网首页案例制作

### 焦点图

1. 容器中图片width:100% ;
2. 处理搜索框  fixed ;     设置宽度 100%   min-width:   max-width: 
3. 图片格式  jpg  png gif dpg webp  bmp svg 
4. 去除图片的4px的问题

### 品牌日

1. 设置3个div 全部左浮动  设置宽度为33.333333% 
2. 3个div中的图片  设置宽度为100% 

### 导航 

1. 放置10个a标签  左浮动 宽度设置为20%  

### 新闻模块

1. 3个盒子 盒子1 50%  盒子2 3  25%   盒子2盒子3 添加边框  box-sizing:border-box    图片宽度设置100%

### flex布局

- 别名  伸缩布局  弹性布局 
- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

### 支持程度

1. 移动端不需要关注兼容
2. pc 考虑兼容

### 属性设置 

- display:flex     **这句话是为父元素设置的**    父元素中的子元素变成伸缩项 
- 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。所以就不需要清除浮动。
- 原理  **通过为父元素设置**display:flex; 控制子元素(伸缩项) 的排列方式
- 默认主轴是---x轴(横向) , 侧轴--- y轴(垂直方向) , 两个轴永远是垂直的关系 



#### 设置主轴的方向 - flex-direction

- flex-direction : row    伸缩项  左---->右
- flex-direction : row-reverse  伸缩项  右--->左
- flex-direction :column   伸缩项  上---->下
- flex-direction: column-reverse   伸缩项   下--->上

#### 设置伸缩项在主轴的显示方式  -  justify-content 

- justify-content:flex-start 开始方向排列  -- 默认值 
- justify-content:flex-end   尾部对齐
- justify-content:center  居中对齐 
- justify-content:space-between  两端对齐  中间平均分配剩余空间
- justify-content:space-around  平均分配剩余空间给伸缩项的两端
- justify-content:space-evenly  平均分配剩余空间

### 设置伸缩项是否换行显示 - flex-wrap

- flex-wrap:nowrap  不换行显示  默认值
- flex-wrap:wrap  换行显示
- flex-wrap:wrap-reverse   换行并翻转

### 设置伸缩项在侧轴的显示方式 - align-items （单行）

- 前提  伸缩项只能有**单行**用 align-items 


- align-items: stretch ;   默认值    前提伸缩项不设置高度   
- align-items: flex-start   开始方向对齐
- align-items:flex-end   结束方向对齐
- align-items:center  居中对齐
- align-items:baseline 基线对齐

### 设置伸缩项在侧轴的显示方式 - align-content(多行)

- 前提  伸缩项**只能有多行**用 align-content (**多行必须出现换行的情况**)


-  align-content: stretch ;   拉伸
-  align-content: flex-start   开始始方向对齐
-  align-content:flex-end   结束方向对齐
-  align-content:center  居中对齐
- aligin-content:space-around;   平均分配剩余空间给伸缩项的两端 
- align-content:space-between  两端对齐 平均分配剩余空间

### flex-flow 

- flex-direction 设置主轴方向   和   flex-wrap  设置换行显示  的 合写 

### 设置给伸缩项的属性

#### flex:number ★ 

属性定义子项目分配剩余空间，用flex来表示占多少份数

计算公式 ---   当前元素的宽度 = 当前伸缩项的flex数值  / 当前所有兄弟的伸缩项的flex数值相加的和

#### 设置侧轴伸缩项的显示方式 - align-self  

- align-self : stretch ;   默认值    **前提伸缩项不设置高度**
- align-self : flex-start   开始方向对齐
- align-self :flex-end   结束方向对齐
- align-self :center  居中对齐
- align-self :baseline 基线对齐

#### order 伸缩项排序  oder:0

数值越小，排列越靠前，默认为0。

### 携程伸缩布局案例

1. 新建项目文件夹  
2. 在index.html  引入css样式  初始化的样式  自己的样式  设置好body 样式  最大宽度  ....... 

#### 搜索区域

1. 固定定位 手动设置宽度100% min-width   max-width   height:44px  
2. 画盒子  
   1. 为父元素设置 display:flex
   2. 盒子1 : flex:1  量取高度  边框  圆角   背景图  阴影 
   3. 盒子2  width:44px   <a>我的</a>   为a标签添加前伪元素  
      1. 伪元素放背景图   1.将精灵图缩小一倍  2. 测量偏移值   3. 修改背景图大小 background-size
      2. a 字体颜色  居中

行内块元素的宽度 小于父元素的时候 flex:1会铺满   如果行内块宽度大于容器   不会铺满  img是不会进行收缩的



#### 扩展

flex-grow 为子元素设置的属性  设置子元素占据剩余空间的比例    默认值是0

​            计算公式  当前子元素的宽度 = 当前子元素的flex-grow值  / 所有兄弟元素flex-grow的和

 flex-shrink 为子元素设置的属性 定义子元素的收缩比   默认值是1 

​         计算公式  当前子元素的宽度 = 当前子元素的flex-shrink 值  / 所有兄弟元素flex-shrink 的和








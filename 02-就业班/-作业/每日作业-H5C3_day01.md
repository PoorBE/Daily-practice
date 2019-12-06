# 每日作业 - H5C3第1天

​	作业说明：

1. 作业题分为两大部分：基础案例和扩展案例。基础案例为涵盖今日所学知识点的案例，所有学员必须全部完成，不能当日完成的利用自习课时间继续完成。扩展案例为在今日所学知识点的基础上，进行扩展训练，学有余力的同学可以尝试完成，不做强制要求。

2. 每个作业题包含训练描述、训练提示、操作步骤三项。
   - **训练描述**可理解为作业题干，有清晰的要求描述。如果读完训练描述即知道如何操作，后面两项忽略。
   - **训练提示**提供实现思路。如果读完训练描述，不能完成操作，继续查看训练提示。
   - **操作步骤**提供具体详细的实现步骤和代码。如果读完训练提示仍然不会，继续查看操作步骤。

## 案例

### 01-《美的》导航搜索

#### 训练描述

原版的《美的》官网，搜索栏鼠标经过后出现搜索框，失去焦点还原，并且是以过渡的方式

#### 训练提示

1. 搭建以项目为主的几个文件
2. 书写导航栏页面布局
   - logo原图比较大，需要设置父盒子宽度和自身的100%
   - 设置导航项
   - 右侧基本都是精灵图，所以不需要使用字体图标，注意间距的调整
3. 将搜索框设置成初始位置，然后当鼠标经过的时候，设置宽度和透明度变化

#### 操作步骤

1. 创建index文件，新建css文件夹，创建base.css文件并初始化基本代码，新建images文件夹

2. 创建index.css保存至css文件夹，首页html文件引入css样式

3. 编写结构代码

   - 创建版心盒子，左左右模块，分别代表logo，导航项，右侧信息

     ```html
     <header>
     	<div class="logo"></div>
     	<div class="topnav">
     		<ul>
     			<li><a href="#">首页</a></li>
     			<li><a href="#">商家入驻</a></li>
     			<li><a href="#">企业采购</a></li>
     			<li><a href="#">全屋家电套购</a></li>
     			<li><a href="#">会员福利社</a></li>
     			<li><a href="#">美的分期</a></li>
     		</ul>
     	</div>
     	<div class="right-info">
     		<ul>
     			<li class="searchbox">
     				<input type="text" placeholder="美的热水器">
     				<i class="icon-meidi search"></i>
     			</li>
     			<li class="mobilebox">
     				<i class="icon-meidi mobile"></i>
     			</li>
     			<li class="carbox">
     				<i class="icon-meidi car"></i>
     			</li>
     			<li class="loginbox">
     				<i class="icon-meidi login"></i>
     				<span>登录</span>
     			</li>
     		</ul>
     	</div>
     </header>
     ```

   - 排版logo和导航项的内容

     ```java
     body {
     	height: 2000px;
       	/*这句话可以不要，没有什么太大的帮助*/
     }

     header {
     	min-width: 1200px;
     	height: 44px;
     	background-color: #0092d8;
     }

     header .logo {
     	float: left;
         width: 120px;
         height: 44px;
         background-image: url(../images/index_service_sprite@2x.png);
         background-repeat: no-repeat;
         background-size: 200px 80px;
         background-position: -80px 0;
     }

     header .topnav {
     	float: left;
     	height: 44px;
     }

     header .topnav li {
     	float: left;
     }

     header .topnav li a {
     	display: block;
     	height: 44px;
     	line-height: 44px;
     	color: #a3c3e6;
     	font-size: 12px;
     	padding: 0 30px;
     }

     header .topnav li a:hover {
     	color: #fff;
     }
     ```

   - 下载相关的图片，排版右侧信息内容

     ```java
     .right-info {
     	float: right;
     }

     .right-info li {
     	float: left;
     	height: 44px;
     	position: relative;
     }

     .right-info li input {
     	width: 100%;
     	height: 100%;
     	text-indent: 2rem;
     	opacity: 0;
     }

     .icon-meidi {
     	display: block;
         width: 20px;
         height: 20px;
     	position: absolute;
         right: 30px;
         cursor: pointer;
         background-image: url(../images/index_sprite.png);
         background-repeat: no-repeat;
     }
      
     .search {
     	top: 12px;
         background-position: -96px -215px;
     }
      
     .searchbox {
     	width: 45px;
     	transition: width .4s ease-in;
     }
      
     .searchbox:hover {
     	width: 250px;
     }
      
     .searchbox:hover input {
     	opacity: 1;
     }
      
     .searchbox:hover i {
     	top: 12px;
         left: 10px;
         background-position: -66px -215px;
     }
      
     .mobilebox {
     	width: 65px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .mobile {
     	background-position: -120px -215px;
     }
      
     .carbox {
     	padding: 0 20px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .car {
     	position: static;
         background-position: -146px -215px;
         cursor: pointer;
     }
      
     .loginbox {
     	width: 85px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .login {
     	position: static;
     	float: left;
         width: 20px;
         height: 20px;
         cursor: pointer;
         background-position: -35px -216px;
         margin-left: 20px;
     }
      
     .loginbox span {
     	float: left;
     	font-size: 12px;
     	color: #fff;
     }
      
     .news {
         font-size: 12px;
         background: rgb(0, 59, 102);
         line-height: 16px;
         color: rgb(255, 255, 255);
         text-align: center;
         padding: 4px;
     }
     ```

4. 排版搜索栏默认的样式，设置当鼠标经过父盒子的样式

5. 打开首页文件，观察效果


## 扩展案例

### 整理icomoon图标, 阿里图标，awesome图标

#### 训练描述

​    1，熟练使用三个平台提供的图标字体
​    2，熟练使用伪元素

#### 训练提示

1. 先下载，然后通过@font-face声明字体文件
2. 利用单独类名的伪元素引入图标，建立基本类名设置字体名称和文字相关
3. 给当前的元素加入基本类名，和单独的类名

#### 操作步骤

​       1，在平台中下载文件，得到download.zip，解压文件

​       2，新建fonts文件夹，创建css引入字体图标，注意路径，注意路径，注意路径


```java
@font-face {
	font-family: 'iconfont';
	src: url('../fonts/iconfont.eot'); /* IE9*/
	src: url('../fonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	url('../fonts/iconfont.woff') format('woff'), /* chrome、firefox */
	url('../fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	url('../fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}
```
​	3，建立基本类名声明字体和样式

```java
.myFont{
	font-family: iconfont;
  	font-size: 16px;
}
```

​	3，利用单独的类名设置伪元素，加载图标的编码

```java
.output::before{
	content: "\e640";
}
```

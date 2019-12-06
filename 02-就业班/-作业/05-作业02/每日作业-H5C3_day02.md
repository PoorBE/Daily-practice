# 每日作业 - H5C3第2天

​	作业说明：

1. 作业题分为两大部分：基础案例和扩展案例。基础案例为涵盖今日所学知识点的案例，所有学员必须全部完成，不能当日完成的利用自习课时间继续完成。扩展案例为在今日所学知识点的基础上，进行扩展训练，学有余力的同学可以尝试完成，不做强制要求。

2. 每个作业题包含训练描述、训练提示、操作步骤三项。
   - **训练描述**可理解为作业题干，有清晰的要求描述。如果读完训练描述即知道如何操作，后面两项忽略。
   - **训练提示**提供实现思路。如果读完训练描述，不能完成操作，继续查看训练提示。
   - **操作步骤**提供具体详细的实现步骤和代码。如果读完训练提示仍然不会，继续查看操作步骤。

## 基础案例

### 01-《阴阳师》二维码

#### 训练描述

利用CSS3动画属性，模拟扫描二维码的场景

#### 训练提示

1. 在大盒子中上下正常排版两张图片
2. 利用动画，让第二张图片上下发生位移
3. 设置动画属性，注意动画设置的兼容问题

#### 操作步骤

1. 创建index文件，新建css文件夹，创建base.css文件并初始化基本代码，新建images文件夹

2. 创建index.css保存至css文件夹，首页html文件引入css样式

3. 编写结构代码

   - 创建父盒子，内部插入两张图片，二维码和扫描的光线

     ```java
     <div class="v-code">
     		<img class="erweima" src="images/57b280b496dee47507111c56NRN73rVj.png" alt="">
     		<img class="line" src="images/line_dd0b705.png" alt="">
     </div>
     ```

   - 排版父盒子和两个图片的位置

     ```java
     body {
     	padding: 50px;
     }

     .v-code {
     	width: 145px;
         height: 240px;
         padding-top: 47px;
         float: left;
         position: relative;
         background: url(../images/index_z_71df05e.png);
         background-position: 0px 0px;
         background-repeat: no-repeat;
     	
     }

     .v-code .erweima {
     	display: block;
     	margin: 0 auto;
     	width: 107px;
     }

     .v-code .line {
     	position: absolute;
         left: 12px;
         top: 45px;
         -webkit-animation: mainbarcode 4s linear infinite;
         -moz-animation: mainbarcode 4s linear infinite;
         -ms-animation: mainbarcode 4s linear infinite;
         animation: mainbarcode 4s linear infinite;
     }
     ```

   - 声明动画

     ```java
     @keyframes mainbarcode {
     	0% {
     	    -webkit-transform: translate3d(0,0,0);
     	    -moz-transform: translate3d(0,0,0);
     	    -ms-transform: translate3d(0,0,0);
     	    transform: translate3d(0,0,0);
     	}
     	50% {
     	    -webkit-transform: translate3d(0,100px,0);
     	    -moz-transform: translate3d(0,100px,0);
     	    -ms-transform: translate3d(0,100px,0);
     	    transform: translate3d(0,100px,0);
     	}
     	100% {
     	    -webkit-transform: translate3d(0,0,0);
     	    -moz-transform: translate3d(0,0,0);
     	    -ms-transform: translate3d(0,0,0);
     	    transform: translate3d(0,0,0);
     	}
     }
     ```


## 扩展案例

### 02-《穷游》背景变换

#### 训练描述

```
1，以往的背景经过都是半透明盒子遮罩直上直下或者渐入渐出
```

```
2，以斜着进入离开需要用到CSS3的斜切
```

#### 训练提示

1. 保存图片，新建文件，初始化样式：
2. 设置鼠标经过样式，利用放大的斜切的原理，让父盒子溢出隐藏

#### 操作步骤

```
1，新建基本的结构
```

​```java
<div class="content">

```
<a href="javascipt:;"></a>
```

</div>

```
​	2，创建CSS样式

​```java
.content {
	width: 275px;
	height: 185px;
	background: url(bgi.jpg) no-repeat;
	margin: 100px auto;
	overflow: hidden;
}
a {
	display: block;
	width: 100%;
	height: 100%;
	background-color: rgba(47, 214, 133, .75);
	opacity: 0;
	transition: all .5 ease-in;
}
```

​	3，设置鼠标经过演示

```java
.content:hover a {
	opacity: 1;
  	/*动画引入*/
	animation: donghua .3s forwards;
}

/*动画声明*/
@keyframes donghua {
	from {
		transform: translateX(130%) skewX(-45deg) scale(1);
	}
	to {
		transform: translateX(0) skewX(-45deg) scale(2);
	}
}
```


// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/base', (req, res) => {
	res.send({
		name: 'zhangsan',
		age: 30
	})
});

app.post('/base', (req, res) => {
	res.send({
		name: 'zhaoliu',
		age: 35
	})
});

app.get('/user', (req, res) => {
	res.send(req.query);
});

app.post('/user', (req, res) => {
	res.send(req.body)
});

app.get('/jsonp', (req, res) => {
	const cb = req.query.cb
	const data = cb+"({name: 'zhaoliu'})"
	res.send(data);
});

// 获取用户列表信息
app.get('/users', (req, res) => {
	res.send('当前是获取用户列表信息的路由');
});

// 获取某一个用户具体信息的路由
app.get('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在获取id为${id}用户信息`);
});

// 删除某一个用户
app.delete('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在删除id为${id}用户信息`);
});

// 修改某一个用户的信息
app.put('/users/:id', (req, res) => {
	// 获取客户端传递过来的用户id
	const id = req.params.id;
	res.send(`当前我们是在修改id为${id}用户信息`);
});

app.get('/xml', (req, res) => {
	res.header('content-type', 'text/xml');
	res.send('<message><title>消息标题</title><content>消息内容</content></message>')
});


//todo案例接口示例
//这块简化成假数据了，真实的项目数据应该是存在mongodb数据库当中的
var list = [
	{_id: 1569913968321, title:'吃饭',completed:false},
	{_id: 1569913971842, title:'睡觉',completed:true},
	{_id: 1569914002122, title:'打豆豆',completed:false},
	{_id: 1569914010337, title:'写作业',completed:false},
	{_id: 1569913973084, title:'复习',completed:false},
];

//查询任务
app.get('/todo/task',(req,res)=>{
	res.send(list)
})

//添加任务
app.post('/todo/addTask',(req,res)=>{
	// 接收客户端传递过来的任务名称
	const { title } = req.body;
	var obj = {
		_id:Date.now(),
		title,
		//刚添加的任务，肯定是未完成的
		completed:false 
	}
	list.push(obj);//将任务添加到list当中
	res.send(obj);
})

//删除任务
app.get('/todo/deleteTask',(req,res)=>{
	const id = req.query._id 
	const index = list.findIndex(item=>item._id == id)
	const obj = list.splice(index,1)
	res.send(obj)
})

//修改任务状态
app.post('/todo/modifyTask',(req,res)=>{
	const {_id,completed,title} = req.body 
	const item = list.find(item=>item._id == _id)
	console.log(completed)
	console.log(title)
	if(title){
		item.title = title
	}else{
		item.completed = completed
	}
	res.send(item)
})

//删除所有的任务
app.get('/todo/clearTask',(req,res)=>{
	list = list.filter(item=>item.completed == false)
	res.send(list)
})


// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
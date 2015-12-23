var express = require('express');
var http = require('http');
var opener = require("opener")
var init = require('./js/dataprocess');    //用于处理初始化的路由
var app = express();
var users = require('./data/invite_panel');		//导入json数据文件
var name = init.joinname(users);        //初始化已邀请人的姓名的拼接逻辑
var count = init.countnum(users);		//初始化已邀请人数
app.use(express.static(__dirname));
app.set('view engine','jade');
app.set('views',__dirname+'/view');
app.get('/',function(req,res){
	//console.log('haha');
	res.render('index',{users:users,name:name,num:count});		//对页面进行渲染
})
app.get('/invite/:id',function(req,res){
	//对后台数据库进行操作
	//console.log(req.params.id);//得到唯一标识id号后后台查询数据库判断是否为已邀请的，从而更新状态
})
var server = http.createServer(app);
server.listen(8000);
console.log('server is run at 8000');
var port = 8000;
opener('http://localhost:' + port);	 

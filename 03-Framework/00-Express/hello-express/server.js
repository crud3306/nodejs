
var express = require('express');
var path = require('path');

var app=express();

// 设置静态文件
app.use(express.static(path.join(__dirname, 'public')))

// 设置路由
app.get('/profile/:id', (req, res) => {
	console.log(req.params);

	res.send('hello '+req.params.id);
});

// 首页
app.get('/', function(req, res){
	console.log(req.params, req.baseUrl, req.ip);

	// 返回普通文本
	res.send('this is homepage');

	// 返回json
	// var responseObj = {name:"qianm"};
	// var responseObj = [{name:"qianm"}, {name:'lishi'}];
	// res.send(responseObj);
	// res.json(responseObj);

	// 显示html
	// var form = fs.readFileSync('./form.html', { encoding: "utf8"});
	// res.send(form);
	// 或者
	// res.sendFile(__dirname+'/from.html');
});

// 测试数据库
app.get('/testdb', function(req, res){
	
	var db = require("./db/mysqlPool");  

	// 用封装的query方法来执行sql，实际用的是pool.getConnection(xxxx)
	// 查列表，返回值如下，可以用循环读取，或者 results[0].id, results[0].title 等 
	/**
	[ RowDataPacket { id: 2, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 3, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 4, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 5, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 6, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 7, title: 'yange2018-07-15 01:11:16' },
	  RowDataPacket { id: 8, title: 'yange2018-07-15 01:11:16' } 
	]
	*/
	db.query("select * from test", [], function(err,results,fields){  
	    //do something  
	    console.log(results, err);
	    console.log(results[0].id, results[0].title, results.length);
	});

	// 查单条，实际上还是列表，取数据时用results[0]
	// db.query("select * from test where id = ?", [2], function(err,results,fields){  
	//     //do something  
	//     console.log(results, err);
	// });


	// 新增记录，返回值如下，可以用到影响行数affectedRows 和 新增记录的insertId
	/*
	OkPacket {
	  fieldCount: 0,
	  affectedRows: 1,
	  insertId: 9,
	  serverStatus: 2,
	  warningCount: 0,
	  message: '',
	  protocol41: true,
	  changedRows: 0 
  	}
	*/
	// db.query("insert into test values(?, ?)", [null, 'haha'], function(err,result,fields){  
	//     //do something  
	//     console.log(result, err);
	//     console.log(result.affectedRows, result.insertId);
	// });



	// update 和 delete 类似于insert



	res.send('this is testdb');
});

app.listen(3000);
console.log('server is started, linstening to port 3000');

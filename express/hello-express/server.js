
var express = require('express');

var app=express();

app.get('/profile/:id', (req, res) => {
	console.log(req.params);

	res.send('hello '+req.params.id);
});

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

app.listen(3000);
console.log('server is started, linstening to port 3000');
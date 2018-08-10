'use strict'

var net = require('net');
var repl = require('repl');

var nickName;
var client;
var globalCallback;



var connectServer = () => {
	var client = net.connect({port:8000});

	client.on('connect', ()=>{
		console.log('连接服务器成功，聊天已就绪');
	});

	// 接收服务端发送过来的信息
	client.on('data', (data)=>{
		var jsonData = JSON.parse(data.toString());
		// console.log(jsonData);
		globalCallback && globalCallback(null, jsonData.nickname+'说：'+jsonData.message);
	});

	client.on('close', (hasError) => {
		console.log('client closed, has error:'+hasError);
		process.exit();
	});

	return client;

	// var data = JSON.stringify({nickname:'polly', message:'hello'});
	// client.write(data);
};

console.log('** welcome to console chat **');
console.log('please input you nickname');
var replInstance = repl.start({
	eval: (cmd, context, filename, callback) => {
		console.log(cmd);
		// 把输入信息中的回车符去掉
		cmd = cmd.replace('\n', '');

		if (!nickName) {
			nickName = cmd;
			console.log('用户：'+nickName+'开始连接服务器');
			client = connectServer();
			globalCallback = callback;
			return;
		}

		if (cmd === 'exit') {
			client.end();
			return;
		}

		var data = JSON.stringify({ nickname:nickName, message:cmd});
		client.write(data);
		// globalCallback(null, nickName + '说：' + cmd);
	}
});
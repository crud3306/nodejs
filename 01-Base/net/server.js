'use strict';

var net = require('net');

var server = net.createServer();

// 当server开始监听端口后触发该事件
server.on('listening', (e)=>{
	console.log('listening', e);
});

// 客户端连接成功后触发
server.on('connection', (socket)=>{
	socket.write('hello');
	socket.end();
});

server.on('close', (e)=>{
	console.log('close', e);
});

server.on('error', (e)=>{
	console.log('error', e);
});


server.listen(8000); // 触发listening事件
console.log('Server started, listening port 8000.');


setTimeout(()=>{
	server.close();
}, 1000);



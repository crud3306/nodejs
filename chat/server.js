'use strict';

var net = require('net');

// 用于保存socket client信息
var socketList = new Set();

var server = net.createServer();

server.on('connection', (socket)=>{
	// 连接成功的客户端记录下来
	socketList.add(socket);
	console.log('client连接，当前客户端数量：'+socketList.size);

	socket.on('data', (data)=>{
		// 给除了当前消息发送者之处的所有客户端发送消息
		socketList.forEach((client)=>{
			if (socket !== client) {
				client.write(data);
			}
		});
	});

	// 客户端关闭时（包含导师常关闭和正常退出），从客户端列表中删除当前连接对象
	socket.on('close', (hasError)=>{
		socketList.delete(socket);
		console.error('client断开，当前客户端数量：'+socketList.size+'，是否异常退出：'+ hasError);
	});

	socket.on('error', (err)=>{
		console.log('socket error：'+err);
	});
});

server.on('error', (err)=>{
	console.log('server error：'+err);
});

// 监听端口，启动服务
// server.listen(8000, ()=>{
// 	console.log('server started, listening port 8000');
// });

server.listen(8000, ()=>{
	var address = server.address();
	console.log('server started, listening port '+ address.port);
});
'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var socketIo = require('socket.io');

var app = express();
app.use(express.static(path.join(__dirname, './public')));

var server = http.Server(app);
var io = new socketIo(server, {
	pingTimeout: 1000*10,	// 超时时间
	pingInterval: 1000*2,	// ping的频率
	transports:['websocket', 'polling'],	
	allowUpgrades:true,	// 传输方式是否允许升级
	httpCompression:true, // 使用加密
	path:'/js',	// 提供客户端js的路径
	serverClient:false	// 是否提供客户端js(socket.io-client)
});
server.listen(8000, (err)=>{
	if (err) {
		return console.error(error);
	}

	console.log('server started listening port %s', server.address().port);
});
'use strict';

var net = require('net');

// 创建client，有多种方式：
// var client = net.connect({port:8000});
var client = net.createConnection(8000);

client.on('data', (data)=>{
	console.log(data.toString());
});



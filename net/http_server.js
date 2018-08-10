'use strict';

var http = require('http');

var httpServer = http.createServer((request, response)=>{
	response.write('hello, from http.');
	response.end();
});

httpServer.listen(8001);
console.log('Server started, listening port 8001.');
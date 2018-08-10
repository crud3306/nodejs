
安装express
===============
npm install express --save

官方api地址：
http://www.expressjs.com.cn/4x/api.html



入门例子：
===============
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);



request
===============
req.params.xx
---------------
接收路由中的特殊值，如/order/1 中的数字1


req.query.xx
---------------
接收get参数，如/order/list?page=1&type=9 中的page与type


req.path
---------------
Contains the path part of the request URL.

// example.com/users?sort=desc
req.path
// => "/users"


req.hostname
---------------
Contains the hostname from the “Host” HTTP header.

// Host: "example.com:3000"
req.hostname
// => "example.com"


req.ip
---------------
The remote IP address of the request.

If the trust proxy is setting enabled, it is the upstream address; see Express behind proxies for more information.

req.ip
// => "127.0.0.1"


最多见官方文档



response
===============











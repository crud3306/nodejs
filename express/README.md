
使用 express 的前提
--------------
前提你已经安装了 Node.js，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。  
> mkdir myapp
> cd myapp

通过 npm init 命令为你的应用创建一个 package.json 文件。 
> npm init

此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受默认设置即可，下面这个除外：
entry point: (index.js)
键入 app.js 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 index.js 文件名，只需按“回车”键即可。
  

  
接下来安装 Express 并将其保存到依赖列表中

安装express
--------------
> npm install express --save

官方api地址：
http://www.expressjs.com.cn/4x/api.html



入门例子：
--------------
```nodejs
var express = require('express');
var app = express();

// 设置静态资源的位置
app.use(express.static(path.join(__dirname, 'public')))


// 登录拦截器 (用来做统一验证)
app.use(function (req, res, next) {
    var url = req.originalUrl;
    if (url != "/login" && !req.session.user) {
        return res.redirect("/login");
    }

    next();
});

// 首页的路由
app.get('/', function(req, res){
  res.send('hello world');
});


// 服务监听3000端口
app.listen(3000);

// 或者
/*
var server = app.listen(3000, function () {
     var host = server.address().address;
     var port = server.address().port;
     console.log('Example app listening at http://%s:%s', host, port);
}); 
*/
```



request
--------------

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
--------------














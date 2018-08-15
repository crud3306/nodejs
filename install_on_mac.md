
环境安装
-----------------
第一步：打开终端,输入以下命令安装Homebrew  
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  
  
第二步：安装node,在终端输入以下命令  
> brew install node  
> 或者
> brew install nodejs，注：是一样的，后者是前者的别名  
  
第三步：查看node安装成功与否  
> node -v  
如果显示出版本号，即安装成功  
  

  
测试  
-----------------
第一步：新建一个文件test.js  
```nodejs
var http = require('http');  
  
var data = { key:'aa', hello:'hello world' };  
  
var srv = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type':'application/json' });
	res.end(JSON.stringify(data));
});

srv.listen(8080, function(){
	console.log('listening on 8080');
});
```

  
第二步：用终端找到其所在的目录运行该test.js文件  
> node ./test.js
  
第三步：通过浏览器进行访问,返回json格式的数据  
> http://localhost:8080/  
  
第四步：前端就可以通过调用这个接口进行数据解析了,并且可以在当前页面进行数据展示了.  
  
第五步：停止服务  
> ctrl + c  
  

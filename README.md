

什么是Node.js
=============
简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。



什么是NPM
=============
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。


查看当前使用的 Node 版本：
> node -v

查看当前使用的 NPM 版本：
> npm -v





第一个Node.js程序：Hello World！
=============
脚本模式
-------------
以下是我们的第一个Node.js程序：
vim helloworld.js
```sh
console.log("Hello World");
```
运行实例 »
> node helloworld.js

程序执行后，正常的话，就会在终端输出 Hello World。



交互模式
-------------
打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：

```sh
$ node
> console.log('Hello World!');
Hello World!
```




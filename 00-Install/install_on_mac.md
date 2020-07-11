
环境安装
=============
第一步：打开终端,输入以下命令安装Homebrew  
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"  
  
第二步：安装node,在终端输入以下命令  
> brew install node  
> 或者
> brew install nodejs，注：是一样的，后者是前者的别名  
  
第三步：查看node安装成功与否  
> node -v  
如果显示出版本号，即安装成功  

查看当前使用的 NPM 版本：
> npm -v



使用淘宝 NPM 镜像
=============
大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
> npm install -g cnpm --registry=https://registry.npm.taobao.org

这样就可以使用 cnpm 命令来安装模块了：
> cnpm install [name]






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
  

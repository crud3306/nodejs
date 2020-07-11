

Express 应用生成器
------------------
通过应用生成器工具 express 可以快速创建一个应用的骨架。  
  
  
通过如下命令安装：  
> $ npm install express-generator -g

-h 选项可以列出所有可用的命令行选项：  
> $ express -h  
> Usage: express [options] [dir]
>
> Options:
>
>   -h, --help          output usage information
>   -V, --version       output the version number
>   -e, --ejs           add ejs engine support (defaults to jade)
>       --hbs           add handlebars engine support
>   -H, --hogan         add hogan.js engine support
>   -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
>       --git           add .gitignore
>   -f, --force         force on non-empty directory
  
  
例如，下面的示例就是在当前工作目录下创建一个命名为 myapp 的应用。  
  
> $ express myapp
  
   create : myapp  
   create : myapp/package.json  
   create : myapp/app.js  
   create : myapp/public  
   create : myapp/public/javascripts  
   create : myapp/public/images  
   create : myapp/routes  
   create : myapp/routes/index.js  
   create : myapp/routes/users.js  
   create : myapp/public/stylesheets  
   create : myapp/public/stylesheets/style.css  
   create : myapp/views  
   create : myapp/views/index.jade  
   create : myapp/views/layout.jade  
   create : myapp/views/error.jade  
   create : myapp/bin  
   create : myapp/bin/www  
  
然后安装所有依赖包：  
> cd myapp 
> npm install
  
启动这个应用（MacOS 或 Linux 平台）：  
> DEBUG=myapp npm start
  
Windows 平台使用如下命令：  
> set DEBUG=myapp & npm start

  
然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。   
  

通过 Express 应用生成器创建的应用一般都有如下目录结构：  

```nodejs
/* 
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
7 directories, 9 files
*/
```





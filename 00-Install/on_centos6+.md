

安装
-------
下载地址：https://nodejs.org/en/download/ 

```sh
cd /usr/local/src

#下载
wget https://nodejs.org/dist/v9.3.0/node-v9.3.0-linux-x64.tar.xz

#***.tar.xz格式文件需要两部解压步骤
xz -d node-v9.3.0-linux-x64.tar.xz
tar -xvf node-v9.3.0-linux-x64.tar -C /usr/local
```

配置环境
-------
```sh
ln -s /usr/local/node/node-v9.3.0-linux-x64/bin/node /usr/local/bin/node

ln -s /usr/local/node/node-v9.3.0-linux-x64/bin/npm /usr/local/bin/npm
```


验证
-------
> node -v  
输出版本号v9.3.0即说明已完成

> npm -v  



使用淘宝 NPM 镜像
-------
大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
> npm install -g cnpm --registry=https://registry.npm.taobao.org

这样就可以使用 cnpm 命令来安装模块了：
> cnpm install [name]






// 1，安装
// ==============
// npm install mysql --save
// 地址：https://github.com/mysqljs/mysql


// 封装一mysql.js
// 通过连接池，连接数据库

// 2，建立一个类库，就叫mysql_pool.js吧，然后内容如下:
// ====================
var mysql=require("mysql");  

var pool = mysql.createPool({  
    // connectionLimit : 10,
    host: 'localhost',  
    user: 'xxxx',  
    password: 'xxx',  
    database: 'xxx',  
    // port: '3306'  
});  
  
var query=function(sql, options, callback){  
    pool.getConnection(function(err, conn){  
        if(err){  
            callback(err, null, null); 

        } else {  
            conn.query(sql,options,function(err, results, fields){  
                //释放连接  
                conn.release();  
                //事件驱动回调  
                callback(err,results,fields);  
            });  
        }  
    });  
};  
  
module.exports = {
  pool,
  query
};  


// 3，在js类使用如下
// ====================
var db = require("./lib/mysql_pool");  

// 用封装的query方法来执行sql，实际用的是pool.getConnection(xxxx)
db.query("select * from table where id=?", [1], function(err,results,fields){  
    //do something  
});

// 直接用pool来执行sql，实际用的是pool.query(xxxx)
db.pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});




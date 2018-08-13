// 安装
// ==============
// npm install mysql
// 地址：https://github.com/mysqljs/mysql


//导入mysql模块
var mysql = require( 'mysql');  

// 配置连接参数
var connection = mysql.createConnection({   
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'testdb'
});

// 连接
connection.connect();    


/**********************插入数据*************************/
var addSql = 'INSERT INTO user (id,name,age) VALUES(?, ?, ?)';
var addSqlParams = [2, "小华", 15];

connection.query(addSql, addSqlParams, function(err, results, fields) {
	if (err) {
		console.log(err);
	}else{
		console.log(results);
	}
});


/********************** 查询数据 *************************/
connection.query( 'SELECT * FROM user', function(err, results, fields) {
	if (err) {
    	console.log(err);
	} else {
    	console.log(results);
	}
});

/********************** 修改数据 *************************/
var updateSql = 'UPDATE user set name= ? where id = ?';
var updateParams = ['无敌强',22];

connection.query(updateSql,updateParams,function(err,result){
	if (err) {
        console.log('[UPDATE ERROR] '+ err.message)

	} else {
        console.log(`------------------------------------UPDATE-------------------`);
        console.log(`UPDATE SUCCESS `+ result.affectedRows);        //成功影响了x行  1
        console.log(`-------------------------------------------------------------`);
	}
});


/********************** 删除数据 *************************/
var delSql = 'DELETE from user where id = ?';
var delParams = [22];

connection.query(delSql, delParams, function(err, result){
	if (err) {
        console.log('[DELETE ERROR] '+ err.message)

	} else {
        console.log(`------------------------------------DELETE-------------------`);
        console.log(`DELETE SUCCESS `+ result.affectedRows);        //成功影响了x行  1
        console.log(`-------------------------------------------------------------`);
	}
});


connection.end();






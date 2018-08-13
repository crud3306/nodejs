
// 地址：
// ==============
// https://github.com/mongodb/node-mongodb-native (更多用法见此)


// 安装
// ==============
// npm install mongoose --save


// 使用
// ==============
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

// const ObjectId = Schema.ObjectId;

// new schema
var todoSchema = new mongoose.Schema({
	item: String
});

// new model
var Todo = mongoose.model('Todo', todoSchema);


// 查找数据
Todo.find({}, (err, data) => {
	if (err) throw err;
	res.render('todo', { todos:data});
})

// 添加数据
var itemOne = Todo(req.body).save(function(err, data){
	if (err) throw err;
	res.json(data);
});

// 删除数据
Todo.find({item:req.params.item}).remove(function(err, data){
	if (err) throw err;
	res.json(data);
});





var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
mongoose.connect('mongodb://hfpp2012:hfpp2012@ds151068.mlab.com:51068/todos');

var todoSchema = new mongoose.Schema({
	item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// 测试添加数据
// var itemOne = Todo({item: 'buy fff'}).save(function(err){
// 	if (err) throw err;
// 	console.log('item saved');
// });

// 没有用数据库时，临时用的数据
// var data = [
// 	{item:'get milk'},
// 	{item:'get dog'},
// 	{item:'go out'}
// ];

module.exports = function(app) {
	// 显示列表页
	app.get('/todo', function(req, res){
		Todo.find({}, (err, data) => {
			if (err) throw err;
			res.render('todo', { todos:data});
		})
	});

	// 保存数据
	app.post('/todo', urlencodedParser, function(req, res){
		// 注意：如果列表数据是存在一个全局数组中，此时添加的数据，会在内存中。
		// 如果server不重启，即使刷新页面，追加的数据也依旧存在。
		// 如果server重启了，则追加的数据丢失。
		// data.push(req.body);
		// res.json(data);

		var itemOne = Todo(req.body).save(function(err, data){
			if (err) throw err;
			res.json(data);
		});
	});

	// 删除数据
	app.delete('/todo/:item', function(req, res){
		// data = data.filter(function(todo){
		// 	return todo.item.replace(/ /g, "-") !== req.params.item;
		// });

		// res.json(data);

		Todo.find({item:req.params.item.replace(/-/g, " ")}).remove(function(err, data){
			if (err) throw err;
			res.json(data);
		});
	});
}
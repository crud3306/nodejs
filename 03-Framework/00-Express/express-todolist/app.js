
var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

// 指定静态资源的位置
app.use(express.static('./public'));
// 指定模板位置，也可不指定，因默认就是根目录下的views中，如果是其它目录请指定
// app.use('views', path.join(__dirname, 'views'));

todoController(app);

app.listen(3000);
console.log('server is started, listening to port 3000');
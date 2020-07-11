// 安装
// npm install nodejs-websocket --save

var ws = require('nodejs-websocket');

var server = ws.createServer(function(conn){
	console.log('new connect');

	conn.on('text', function(str){
		console.log(str);
		// conn.sendText(str);
		// boardcast(str);

		var data = JSON.parse(str);
		// 可以在str中拼装更多信息，比如发送到哪个组，或发送到哪个人，来实现群聊\私聊
		// 考虑微信聊天列表中：私聊，群聊，我的消息未读数
		// 服务端nosql
		// message { _id, type, actived, members{id, unread_num, last_read_at }, create_at, update_at}
		// message_record { _id, member_id, content, file{type, path},  create_at }
		// 客户端
		// 识别用户当前位置，在非聊天页；在某一个聊天页。未读消息数是否应该显示
		// 联天流程：创建群发，选人，群发信息


		switch (data.type) {
			case 'setname':
				conn.nickname = data.name;
				boardcast(JSON.stringify({
					type:'login',
					name: data.name,
					text: '加入了房间'
				}));
				break;
			case 'chat':
				// boardcast(data.name  + '：' + data.text);
				boardcast(JSON.stringify({
					type:'chat',
					name: conn.nickname,
					text: data.text
				}));
				break;
			default :
				break;
		}
	});

	conn.on('error', function(err){
		console.log(err);
	});

	conn.on('close', function(e){
		boardcast(conn.nickname + '离开了房间');
	});

}).listen(2333);
console.log('server start on port 2333');

// 广播消息（群发消息）
function boardcast(str)
{
	server.connections.forEach(function(conn){
		conn.sendText(str);
	});
}


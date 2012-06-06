var io = require('socket.io').listen(8080);
io.sockets.on('connection', function(socket){
	console.log('socket has been connected');	
	
	socket.on('displayname', function (username){
		console.log('username ' + username + ' have been received');
		//socket.broadcast.emit('updatename', username);
		socket.broadcast.emit('updatename', username);
	});	

	}
);
	

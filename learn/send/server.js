var io = require('socket.io').listen(8080);
io.sockets.on('connection', function (socket) {
  socket.on('message', function (data) { 
	console.log(data);
	socket.send('hi i am server');
  });
});


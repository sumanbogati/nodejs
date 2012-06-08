(function() {

  var io = require('socket.io').listen(4000);
  var rooms = ['room1','room2','room3'];
  io.sockets.on('connection', function(socket) {
	   socket.on('drawClick', function (data) {
	   
       io.sockets.in(socket.room).emit('draw', {
        x: data.x,
        y: data.y,
        type: data.type
      });
      
		}
	);
	
 
	socket.on('enterroom', function (newroom) {
		//socket.leave(socket.room);
		socket.join(newroom);
		socket.room = newroom;
		
		socket.emit('updateroom', rooms, newroom);
	});
  });
}).call(this);

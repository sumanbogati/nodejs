var io = require('socket.io').listen(8080);

io.configure(function (){
  io.set('authorization', function (handshakeData, myfunction) {
  
  	//when we send the parameter as false then there will not make
	//the connection betweeen clien and server
    myfunction(null, false); 
  });
});

io.sockets.on('connection', function (socket){
	console.log(socket.handshake); //there we can not get any data because the connection is not made
});
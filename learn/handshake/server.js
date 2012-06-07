var io = require('socket.io').listen(8080);

io.configure(function (){
  
  // the handshakeData object stores the information about the clients
  // like ip address, port, time etc
  
 io.set('authorization', function (handshakeData, callback) {
  	//console.log(handshakeData);
	
	//when the function is called all the data of handshakeData is available 
	//to socket.handshake when the connection will be on
    callback(null, true); 
    
  });
  
});


io.sockets.on('connection', function(socket){
	console.log(socket.handshake);  //all the data of handshakeData is available here. when  callback(null, true);  is disabled it's not available	
});
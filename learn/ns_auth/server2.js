var io = require('socket.io').listen(8080);

io.of('/doeacc').authorization(function (handshakeData, storeData){
	handshakeData.ddir = 'tilak'; //we can add and remove the data after authorization happened
	storeData(null, true);		
	console.log('connection has been made');
});


io.of('/doeacc').on('connection', function (socket){

	var dirname = socket.handshake.ddir; //we are getting the director name which added earlier during the connection made
	socket.emit("displayDir", dirname)
});



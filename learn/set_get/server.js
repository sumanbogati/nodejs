var io = require('socket.io').listen(8082);

io.sockets.on('connection', function (socket){

	//storing the value
	socket.on('setGroupName', function(groupName){
		socket.set('groupName', groupName);	
	});
	
	socket.on('setUserName', function(userName){
		socket.set('userName', userName);	
	});
	
	
	
	socket.on('displayInfo', function (){
		var myusername ;
		var mygroupname ;
		
		//retriving the stored value
		socket.get('userName', function (err, username){
			myusername = username;
		});
		
		socket.get('groupName', function (err, groupname){
			mygroupname = groupname;
		});
		
		//sending the value to all clients except host onself
		socket.broadcast.emit('putInfo', {'username' : myusername, 'groupname' : mygroupname });
	});
	
});

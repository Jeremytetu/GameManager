var ws;
var my_games;


var sendDisplay = function(message){
    ws.send(JSON.stringify({
			"method": "displayswitch",
			"arguments": message
	}));
}

var sendPath = function(path){
    ws.send(JSON.stringify({
			"method": "startgame",
			"arguments": path
	}));
}


var getGames = function(){
	if ( ws != null ){
		if (ws.readyState===1){
			ws.send(JSON.stringify({
				"method": "getGames",
				"arguments": [],
			}));
		}
	}
}

var listen = function(){

	ws.onmessage = function(message) {
		var obj = JSON.parse(message.data)
		//console.log(obj)
		switch(obj.method){
			case 'games':
				console.log(obj.arguments)
				change(obj.arguments)
				break;
			default:
				console.log('methode inconnue')
				break;
		}

	}
}

function tryConnection() {
	var scope = angular.element($("#NavBar")).scope();
	var bool = true;
	try{
		ws = new WebSocket("ws://"+scope.ip+":8080");
		console.log('connected');
		//listen();
		//return true;
	}
	catch(e){
		console.log('echec connection');
		scope.showAlert(e);
		bool = false;
	}
	finally {
		if (bool){
		   listen();
		   return true;
		}
		else {
			return false;
		}
	}
	
}

function change(allgames) {
	var scope = angular.element($("#allgames")).scope();
	scope.$apply(function(){
		scope.games = allgames;			
	})
}



$( document ).ready(function() {

	var heightNavBar = $('#NavBar').height();
	$('#ngView').css("height" , "calc(100% - "+heightNavBar+"px)");

	
	console.log(heightNavBar);

	if ( localStorage.getItem('ip')==null){
		var scope = angular.element($("#NavBar")).scope();
		scope.openFromLeft(null);
	}
	else {
		tryConnection();
	}
});
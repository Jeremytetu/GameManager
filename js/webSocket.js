var ws = new WebSocket("ws://localhost:8080");

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

var startMSI = function(){
    ws.send(JSON.stringify({
			"method": "startMSI",
			"arguments": [],
	}));
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

function change(allgames) {
	var scope = angular.element($("#allgames")).scope();
	scope.$apply(function(){
		scope.games = allgames;			
	})	
}


$( document ).ready(function() {
    listen();
});
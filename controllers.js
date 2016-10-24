var MyGamesManagerControllers = angular.module('MyGamesManagerControllers', []);

MyGamesManagerControllers.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

});

MyGamesManagerControllers.controller('NavCtrl', ['$scope', function ($scope, $timeout, $mdSidenav, $log, $location) {
  
}]);

MyGamesManagerControllers.controller('displaySwitchCtrl', ['$scope', function ($scope) {
  
}]);

MyGamesManagerControllers.controller('gamesCtrl', ['$scope', function ($scope) {
  
}]);
MyGamesManagerControllers.controller('HomeController', ['$scope', function ($scope) {
  
}]);


MyGamesManagerControllers.controller('demoSwipeCtrl', function($scope) {
    $scope.planLock = true;

    /*$scope.onSwipeLeft = function(ev) {
      alert('You swiped left!!');
    };

    $scope.onSwipeRight = function(ev) {
      alert('You swiped right!!');
    };
    $scope.onSwipeUp = function(ev) {
      alert('You swiped up!!');
    };

    $scope.onSwipeDown = function(ev) {
      alert('You swiped down!!');
    };*/

    $scope.displaySwitch = function(display) {
      console.log("display : " + display);
      sendDisplay(display);
    }

    $scope.startGame = function(game_path) {
      console.log("exec path : " + game_path);
      sendPath(game_path);
    }
	
	  $scope.startMSI = function() {
      console.log("start MSI Afterburn");
      startMSI();
    }

    $scope.games = [];
  });

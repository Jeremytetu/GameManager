var MyGamesManagerControllers = angular.module('MyGamesManagerControllers', []);

MyGamesManagerControllers.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {


});

MyGamesManagerControllers.controller('NavCtrl', function ($scope, $mdDialog) {
  if (localStorage.getItem('ip')!=null){
    $scope.ip = localStorage.getItem('ip');
  } else {
    $scope.ip = "";
  }

  $scope.openFromLeft = function(ev) {
     var confirm = $mdDialog.prompt()
      .title('Ip Server : '+$scope.ip)
      .textContent("Enter new WebSocket Server's IP")
      .placeholder('IP adress server')
      .initialValue($scope.ip)
      .targetEvent(ev)
      .ok('Connection')
      .cancel('Cancel')
      .targetEvent(null);
      $mdDialog.show(confirm).then(function(result) {
        $scope.ip = result ;
        localStorage.setItem('ip',$scope.ip);
        tryConnection();
        }, function() {
      });
    };

    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.confirm()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Server Unreachable')
          .textContent("Please, set server's ip")
          .ariaLabel('Alert Ip wrong')
          .ok('Got it!')
          .targetEvent(null)
      ).then(function(){
        $scope.openFromLeft(ev)
      }, function(){});
    };
});

MyGamesManagerControllers.controller('displaySwitchCtrl', ['$scope', function ($scope) {
  $scope.displaySwitch = function(display) {
      console.log("display : " + display);
      sendDisplay(display);
    }
}]);

MyGamesManagerControllers.controller('gamesCtrl', function ($scope, $route) {

  $scope.startGame = function(game_path) {
      console.log("exec path : " + game_path);
      sendPath(game_path);
    }

  getGames(); //Charge les jeux dans le scope


});

MyGamesManagerControllers.controller('HomeController', ['$scope', function ($scope) {
  
}]);


MyGamesManagerControllers.controller('demoSwipeCtrl', function($scope, $mdDialog) {
    /*$scope.games = [];
    $scope.planLock = true;
    if (localStorage.getItem('ip')!=null){
      $scope.ip = localStorage.getItem('ip');
    } else {
      $scope.ip = "";
    }
    


    $scope.openFromLeft = function(ev) {
     var confirm = $mdDialog.prompt()
      .title('Ip Server : '+$scope.ip)
      .textContent("Enter new WebSocket Server's IP")
      .placeholder('IP adress server')
      .initialValue($scope.ip)
      .targetEvent(ev)
      .ok('Connection')
      .cancel('Cancel')
      .targetEvent(null);
      $mdDialog.show(confirm).then(function(result) {
        $scope.ip = result ;
        localStorage.setItem('ip',$scope.ip);
        tryConnection();
        }, function() {
      });
    };

    $scope.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.confirm()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Server Unreachable')
          .textContent("Please, set server's ip")
          .ariaLabel('Alert Ip wrong')
          .ok('Got it!')
          .targetEvent(null)
      ).then(function(){
        $scope.openFromLeft(ev)
      }, function(){});
      $scope.games = [];
    };

    


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
*/
  });

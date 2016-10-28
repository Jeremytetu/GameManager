var GamesManager = angular.module('GamesManager', ['ngRoute', 'ngAnimate', 'ngMaterial' , 'MyGamesManagerControllers']);

GamesManager.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/games', {
      templateUrl : 'games.html',
      controller: 'gamesCtrl'
    }).
    when('/displaySwitch', {
      templateUrl : 'displaySwitch.html',
      controller: 'displaySwitchCtrl'
    }).
    otherwise({
      redirectTo : '/games'
    });
}]);


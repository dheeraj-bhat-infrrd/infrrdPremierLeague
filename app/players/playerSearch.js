angular.module('InfrrdPL.players',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('players',{
    url: '/players',
    templateUrl: 'players/playerSearch.html',
    controller: 'playerCtrl'
  });

}])

.controller('playerCtrl',['$scope','$state',function($scope,$state){


}])

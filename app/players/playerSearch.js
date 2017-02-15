angular.module('InfrrdPL.players',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('players',{
    url: '/players',
    templateUrl: 'players/playerSearch.html',
    controller: 'playerCtrl'
  });

}])

.controller('playerCtrl',['$scope','$state',function($scope,$state){

  var playerArray = [
    {no: 1, name: "Dheeraj Bhat", role: "Batsman", team: "RedDevils"},
    {no: 2, name: "RedDevil", role: "Captain/All Rounder", team: "RedDevils"},
    {no: 3, name: "Mastermind", role: "Bowler", team: "RedDevils"}
  ];

  $scope.playersSearched = playerArray;

  $scope.searchThePlayer = function(){
    var player = $scope.player;

    if(player){
      $scope.playerFound = true;
      $scope.errMsg = false;
    }else{
      $scope.errMsg = true;
      $scope.playerFound = false;
    }
  }

}])

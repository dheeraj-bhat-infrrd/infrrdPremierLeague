var globalId;

angular.module('InfrrdPL.matches',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('results',{
    url: '/results',
    templateUrl: 'matches/results.html',
    controller: 'resultsCtrl'
  });

}])

.controller('resultsCtrl',['$scope','$state','$http',function($scope,$state,$http){

  $scope.score1Team = false;
  $scope.score2Team = false;

  $http.get('resources/json/results.json').then(function(response){
    $scope.resultsData = response.data;
  });

  $http.get('resources/json/scoreCards.json').then(function(response){
    $scope.scoreCards = response.data;
  });

  $scope.setScoreCard = function(result){
    globalId = result.id;
    $scope.scoreCardTeam1 = result.team1;
    $scope.scoreCardTeam2 = result.team2;
  }

  $scope.showScoreCard = function(result){
    if(globalId ===  result.id){
      $scope.score = result;
    }
  }

  $scope.matchId = globalId;



}])

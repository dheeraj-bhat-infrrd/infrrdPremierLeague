var globalId;

angular.module('InfrrdPL.matches',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('results',{
    url: '/results',
    templateUrl: 'matches/results.html',
    controller: 'resultsCtrl'
  });

  $stateProvider.state('scorecard',{
    url: '/results/scorecard',
    templateUrl: 'matches/scoreCard.html',
    controller: 'scoreCardCtrl'
  });
}])

.controller('resultsCtrl',['$scope','$state','$http',function($scope,$state,$http){
  $http.get('resources/json/results.json').then(function(response){
    $scope.resultsData = response.data;
  });

  $scope.showScoreCard = function(id){
    globalId = id;
    $state.go('scorecard');
  }
}])

.controller('scoreCardCtrl',['$scope','$state','$http',function($scope,$state,$http){

  $scope.matchId = globalId;

}])

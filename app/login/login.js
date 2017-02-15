angular.module('InfrrdPL.login',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('login',{
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });

}])

.controller('loginCtrl',['$scope','$state',function($scope,$state){

  $scope.signIn = function(){
    var username = $scope.user.email;
    var password = $scope.user.password;

    if(username && password){
      $state.go('home')
    }
  }
}])

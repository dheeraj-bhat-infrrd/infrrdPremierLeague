'use strict';

angular.module('InfrrdPL.register',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('register',{
    url: '/register',
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  });

}])

.controller('registerCtrl',['$scope','$state',function($scope,$state){

  $scope.cPassErrMsg = true;

  $scope.signUp = function(){
    var username = $scope.user.email;
    var password = $scope.user.password;
    var confirmPassword =  $scope.user.confirmPassword;

    if(username && password && confirmPassword){
      if(confirmPassword === password){
        $scope.cPassErrMsg=false;
        $state.go('login');
      }else{
        $scope.cPassErrMsg=true;
      }
    }
  }

}])

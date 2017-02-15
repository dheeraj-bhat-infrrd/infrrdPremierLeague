'use strict';

angular.module('InfrrdPL.home',['ui.router'])

.config(['$stateProvider',function($stateProvider){

  $stateProvider.state('home',{
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl',['$scope',function($scope){
  
}])

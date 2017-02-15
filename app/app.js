'use strict';

// Declare app level module which depends on views, and components
angular.module('InfrrdPL', [
  'ui.router',
  'InfrrdPL.home',
  'InfrrdPL.register',
  'InfrrdPL.login',
  'InfrrdPL.players'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
}]);

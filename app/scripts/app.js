'use strict';

/**
 * @ngdoc overview
 * @name jsChoreoBuilderApp
 * @description
 * # jsChoreoBuilderApp
 *
 * Main module of the application.
 */
angular
  .module('jsChoreoBuilderApp', [
    'LocalStorageModule',
    'mgcrea.ngStrap',
    'ngAnimate',
    'ngCookies',
    'ngDragDrop',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

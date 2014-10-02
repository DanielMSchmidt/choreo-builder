'use strict';

/**
 * @ngdoc function
 * @name jsChoreoBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsChoreoBuilderApp
 */
angular.module('jsChoreoBuilderApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.availableMoves = (localStorageService.get('availableMoves') || []);
    localStorageService.bind($scope, 'availableMoves', $scope.availableMoves);

    $scope.addMove = function() {
      $scope.availableMoves.push($scope.newMove);
      $scope.newMove = '';
    };

    $scope.removeMove = function(move) {
      $scope.availableMoves.splice($scope.availableMoves.indexOf(move), 1);
    };
  });

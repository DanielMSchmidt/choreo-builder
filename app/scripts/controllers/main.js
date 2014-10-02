'use strict';

/**
 * @ngdoc function
 * @name jsChoreoBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsChoreoBuilderApp
 */
angular.module('jsChoreoBuilderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.availableMoves = [];

    $scope.addMove = function() {
      $scope.availableMoves.push($scope.newMove);
      $scope.newMove = "";
    }
  });

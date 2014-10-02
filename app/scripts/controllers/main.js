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
    var sortableEle;

    // available moves should be persisted
    $scope.availableMoves = (localStorageService.get('availableMoves') || []);
    localStorageService.bind($scope, 'availableMoves', $scope.availableMoves);

    // chosen moves should be persisted
    $scope.chosenMoves = (localStorageService.get('chosenMoves') || []);
    localStorageService.bind($scope, 'chosenMoves', $scope.chosenMoves);

    $scope.addMove = function() {
      $scope.availableMoves.push($scope.newMove);
      $scope.newMove = '';
    };

    $scope.addChosenMove = function(newMove) {
      $scope.chosenMoves.push(newMove);
    };

    $scope.removeMove = function(move) {
      $scope.availableMoves.splice($scope.availableMoves.indexOf(move), 1);
    };

    $scope.removeChosenMove = function(move) {
      $scope.chosenMoves.splice($scope.chosenMoves.indexOf(move), 1);
    };

    $scope.dragStart = function(e, ui) {
      ui.item.data('start', ui.item.index());
    }

    $scope.dragEnd = function(e, ui) {
      var start = ui.item.data('start'),
          end = ui.item.index();

      $scope.chosenMoves.splice(end, 0, $scope.chosenMoves.splice(start, 1)[0]);
      $scope.$apply();
    }

    sortableEle = $('.js-sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });
  });

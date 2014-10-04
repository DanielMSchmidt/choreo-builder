'use strict';
/* global $ */

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

    $scope.currentIndex = $scope.chosenMoves.length + 1;

    $scope.addMove = function() {
      $scope.availableMoves.push({name: $scope.newMove, comments: []});
      $scope.newMove = '';
    };

    $scope.addChosenMove = function(newMove) {
      var move = angular.copy(newMove);
      move.index = $scope.currentIndex;
      $scope.chosenMoves.push(move);
      $scope.currentIndex++;
    };

    $scope.removeMove = function(move) {
      $scope.availableMoves.splice($scope.availableMoves.indexOf(move), 1);
    };

    $scope.removeChosenMove = function(move) {
      $scope.chosenMoves.splice($scope.chosenMoves.indexOf(move), 1);
    };

    $scope.addCommentToFigure = function(move, newComment) {
      // TODO: find all moves with the same name
      // TODO: add to figure list
    };

    $scope.addCommentToPart = function(move, newComment) {
      var index = $scope.chosenMoves.indexOf(move);
      move.comments.push(newComment);
      $scope.chosenMoves[index] = move;
      localStorageService.set('chosenMoves', $scope.chosenMoves);

      $scope.newComment = '';
    };

    $scope.dragStart = function(e, ui) {
      ui.item.data('start', ui.item.index());
    };

    $scope.dragEnd = function(e, ui) {
      var start = ui.item.data('start'),
          end = ui.item.index();

      $scope.chosenMoves.splice(end, 0, $scope.chosenMoves.splice(start, 1)[0]);
      $scope.$apply();
    };

    sortableEle = $('.js-sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });
  });

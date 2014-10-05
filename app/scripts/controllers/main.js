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

    // chosen notes should be persisted
    $scope.notes = (localStorageService.get('notes') || []);
    localStorageService.bind($scope, 'notes', $scope.notes);

    $scope.addMove = function() {
      $scope.availableMoves.push({name: $scope.newMove});
      $scope.newMove = '';
    };

    $scope.addChosenMove = function(newMove) {
      var move = angular.copy(newMove);
      move.moveHash = newMove.$$hashKey;
      $scope.chosenMoves.push(move);
      $scope.updatePositions();
    };

    $scope.removeMove = function(move) {
      $scope.availableMoves.splice($scope.availableMoves.indexOf(move), 1);
    };

    $scope.removeChosenMove = function(move) {
      $scope.chosenMoves.splice($scope.chosenMoves.indexOf(move), 1);
    };

    $scope.dragStart = function(e, ui) {
      ui.item.data('start', ui.item.index());
    };

    $scope.dragEnd = function(e, ui) {
      var start = ui.item.data('start'),
          end = ui.item.index();

      $scope.chosenMoves.splice(end, 0, $scope.chosenMoves.splice(start, 1)[0]);
      $scope.$apply();
      $scope.updatePositions();
    };

    $scope.updatePositions = function() {
      angular.forEach($scope.chosenMoves, function(item, index) {
        item.position = index;
      });
    };

    $scope.addCommentToFigure = function(move, newComment) {
      $scope.addCommentWithId(move.moveHash, newComment);
    };

    $scope.addCommentToPart   = function(move, newComment) {
      $scope.addCommentWithId(move.$$hashKey, newComment);
    };

    $scope.addCommentWithId = function (id, comment) {
      $scope.notes.push({id: id, content: comment});
      console.log($scope.notes);
    };

    sortableEle = $('.js-sortable').sortable({
        start: $scope.dragStart,
        update: $scope.dragEnd
    });
  });

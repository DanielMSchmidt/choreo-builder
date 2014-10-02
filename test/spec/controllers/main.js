'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('jsChoreoBuilderApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be able to add a move', function () {
    var oldLength = scope.availableMoves.length;

    scope.addMove('Test');
    expect(scope.availableMoves.length).toBe(oldLength + 1);
  });
});

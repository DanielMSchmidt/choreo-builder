'use strict';
angular.module('jsChoreoBuilderApp').filter('forId', function () {
  var filter = function(arr, key) {
    var newArr = [];

    angular.forEach(arr, function(item) {
        if (item.id === key) {
            newArr.push(item);
        }
    });

    return newArr;
  };
  return filter;
});

'use strict';

/**
 * @ngdoc function
 * @name blogNoDbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blogNoDbApp
 */
angular.module('blogNoDbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

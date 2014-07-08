'use strict';

/**
 * @ngdoc function
 * @name blogNoDbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogNoDbApp
 */
angular.module('blogNoDbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

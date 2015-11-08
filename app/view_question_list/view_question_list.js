'use strict';

angular.module('myApp.question_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_question_list', {
    templateUrl: 'view_question_list/view_question_list.html',
    controller: 'QuestionListCtrl'
  });
}])

.controller('QuestionListCtrl', [function() {

}]);

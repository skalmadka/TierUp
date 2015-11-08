'use strict';

angular.module('myApp.student_list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_student_list', {
    templateUrl: 'view_student_list/view_student_list.html',
    controller: 'StudentListCtrl'
  });
}])

.controller('StudentListCtrl', [function() {

}]);

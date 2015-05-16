/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../../bower_components/dt-jquery/jquery.d.ts" />
///<reference path="main\main.controller.ts"/>
///<reference path="partials\profile\profile.controller.ts"/>
///<reference path="main\employee.controller.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    angular.module('projectManagement', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'ngDialog', 'LocalStorageModule']).service('employeeService', projectManagement.EmployeeService).controller('MainCtrl', projectManagement.MainCtrl).controller('ProfileCtrl', projectManagement.ProfileCtrl).controller('InfoCtrl', projectManagement.InfoCtrl).controller('EmployeeCtrl', projectManagement.EmployeeCtrl).config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }]).config(function ($routeProvider) {
        $routeProvider.when('/Profile', {
            templateUrl: 'app/partials/profile/profile.html',
            controller: 'ProfileCtrl'
        }).when('/Tasks', {
            templateUrl: 'app/partials/tasks/tasks.html',
            controller: 'ProfileCtrl'
        }).when('/Employees', {
            templateUrl: 'app/partials/employees/employees.html',
            controller: 'EmployeeCtrl'
        }).when('/Email', {
            templateUrl: 'app/partials/email/email.html',
            controller: 'MainCtrl'
        }).when('/Chat', {
            templateUrl: 'app/partials/chat/chat.html',
            controller: 'MainCtrl'
        }).when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=index.js.map
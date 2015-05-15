/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
///<reference path="main\main.controller.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    angular.module('projectManagement', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap']).controller('MainCtrl', projectManagement.MainCtrl).config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=index.js.map
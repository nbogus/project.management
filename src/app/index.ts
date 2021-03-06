/// <reference path="../../bower_components/dt-angular/angular.d.ts" />
/// <reference path="../../bower_components/dt-jquery/jquery.d.ts" />
///<reference path="main\main.controller.ts"/>
///<reference path="partials\profile\profile.controller.ts"/>
///<reference path="main\employee.controller.ts"/>
///<reference path="main\services\email.service.ts"/>
///<reference path="main\mail.controller.ts"/>
///<reference path="main\services\project.service.ts"/>
///<reference path="main\project.controller.ts"/>
///<reference path="main\project.info.controller.ts"/>

'use strict';

module projectManagement {
  angular.module('projectManagement', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap','ngDialog','LocalStorageModule','lodash','chart.js'])

    .service('employeeService',EmployeeService)
    .service('emailService',EmailService)
    .service('projectService',ProjectService)
    .service('taskService',TaskService)

    .controller('ProjectCtrl', ProjectCtrl)
    .controller('ProjectInfoCtrl', ProjectInfoCtrl)
    .controller('MainCtrl', MainCtrl)
    .controller('ProfileCtrl', ProfileCtrl)
    .controller('InfoCtrl', InfoCtrl)
    .controller('EmployeeCtrl', EmployeeCtrl)
    .controller('MailCtrl', MailCtrl)
    .controller('MessageCtrl', MessageCtrl)


    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('ls');
    }])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/Profile', {
        templateUrl: 'app/partials/profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/Tasks', {
        templateUrl: 'app/partials/tasks/tasks.html',
        controller: 'ProjectInfoCtrl'
      })
      .when('/Employees', {
        templateUrl: 'app/partials/employees/employees.html',
        controller: 'EmployeeCtrl'
      })
      .when('/Email', {
        templateUrl: 'app/partials/email/email.html',
        controller: 'MailCtrl'
      })
      .when('/Chat', {
        templateUrl: 'app/partials/chat/chat.html',
        controller: 'MainCtrl'
      })
      .when('/Projects/:code', {
        templateUrl: 'app/partials/projects/projectInfo.html',
        controller: 'ProjectInfoCtrl'
      })
      .when('/Projects', {
        templateUrl: 'app/partials/projects/projects.html',
        controller: 'ProjectCtrl'
      })
      .when('/Send', {
        templateUrl: 'app/partials/email/sendEmail.html',
        controller: 'MailCtrl'
      })
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
}

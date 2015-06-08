///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var ProjectCtrl = (function () {
        /* @ngInject */
        function ProjectCtrl($scope, ngDialog, projectService, employeeService, $routeParams) {
            this.ngDialog = ngDialog;
            this.projectService = projectService;
            this.employeeService = employeeService;
            $scope.vm = projectService;
            $scope.scope = this;
        }
        ProjectCtrl.prototype.loadProjects = function () {
        };
        ProjectCtrl.prototype.openNew = function () {
            var dialog = this.ngDialog.open({
                template: 'app/partials/projects/new.html',
                controller: ProjectCtrl
            });
        };
        return ProjectCtrl;
    })();
    projectManagement.ProjectCtrl = ProjectCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=project.controller.js.map
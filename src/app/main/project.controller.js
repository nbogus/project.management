///<reference path="services\project.service.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var ProjectCtrl = (function () {
        /* @ngInject */
        function ProjectCtrl($scope, ngDialog, projectService, $routeParams) {
            this.ngDialog = ngDialog;
            this.projectService = projectService;
            $scope.vm = projectService;
        }
        ProjectCtrl.prototype.loadProjects = function () {
        };
        return ProjectCtrl;
    })();
    projectManagement.ProjectCtrl = ProjectCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=project.controller.js.map
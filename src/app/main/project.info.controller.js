///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var ProjectInfoCtrl = (function () {
        /* @ngInject */
        function ProjectInfoCtrl($scope, $routeParams, projectService, employeeService, _) {
            this.$routeParams = $routeParams;
            this.projectService = projectService;
            this.employeeService = employeeService;
            this._ = _;
            $scope.vm = this;
            this.Project = this.projectService.getProjectByCode(this.$routeParams['code']);
            this.employees = this.filterEmployeesByProjectCode(this.$routeParams['code']);
            this.employeeCost = this.calculateCost();
        }
        ProjectInfoCtrl.prototype.filterEmployeesByProjectCode = function (code) {
            var employees = this.employeeService.getEmployees();
            var projectEmployees = this._.filter(employees, function (employee) {
                return employee.Employee.ProjectCode == code ? employee : null;
            });
            return projectEmployees;
        };
        ProjectInfoCtrl.prototype.calculateCost = function () {
            var totalCost;
            this._.each(this.employees, function (employee) {
                var cost = (employee.Employee.Hours * employee.Employee.Cost);
                totalCost += cost;
            });
            return totalCost;
        };
        return ProjectInfoCtrl;
    })();
    projectManagement.ProjectInfoCtrl = ProjectInfoCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=project.info.controller.js.map
///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>
///<reference path="services\task.service.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var ProjectInfoCtrl = (function () {
        /* @ngInject */
        function ProjectInfoCtrl($scope, $routeParams, projectService, employeeService, taskService, _, ngDialog) {
            this.$routeParams = $routeParams;
            this.projectService = projectService;
            this.employeeService = employeeService;
            this.taskService = taskService;
            this._ = _;
            this.ngDialog = ngDialog;
            $scope.vm = this;
            this.Project = this.projectService.getProjectByCode(this.$routeParams['code']);
            this.employees = this.filterEmployeesByProjectCode(this.$routeParams['code']);
            this.employeesAll = this.employeeService.getEmployees();
            this.employeeCost = this.calculateCost();
            this.tasks = this.taskService.getTasks();
        }
        ProjectInfoCtrl.prototype.filterEmployeesByProjectCode = function (code) {
            var employees = this.employeeService.getEmployees();
            var projectEmployees = this._.filter(employees, function (employee) {
                if (employee.ProjectCode)
                    return employee.ProjectCode == code ? employee : null;
            });
            return projectEmployees;
        };
        ProjectInfoCtrl.prototype.calculateCost = function () {
            var totalCost;
            this._.each(this.employees, function (employee) {
                var cost = (employee.Hours * employee.Cost);
                totalCost += cost;
            });
            return totalCost;
        };
        ProjectInfoCtrl.prototype.assignEmployee = function (employee) {
            employee.ProjectCode = this.Project.ProjectCode;
            this.employeeService.updateEmployee(employee);
            this.reload();
        };
        ProjectInfoCtrl.prototype.reload = function () {
            this.employeesAll = this.employeeService.getEmployees();
            this.tasks = this.taskService.getTasks();
        };
        ProjectInfoCtrl.prototype.openNew = function () {
            var dialog = this.ngDialog.open({
                template: 'app/partials/tasks/newTask.html',
                controller: ProjectInfoCtrl
            });
        };
        ProjectInfoCtrl.prototype.addTask = function (task) {
            this.taskService.addTask(task);
            this.reload();
            this.ngDialog.close('close');
        };
        ProjectInfoCtrl.prototype.removeTask = function (task) {
            this.taskService.removeTask(this.tasks, task);
            this.reload();
        };
        return ProjectInfoCtrl;
    })();
    projectManagement.ProjectInfoCtrl = ProjectInfoCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=project.info.controller.js.map
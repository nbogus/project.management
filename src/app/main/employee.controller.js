///<reference path="services\employee.service.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-16.
 */
///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var EmployeeCtrl = (function () {
        /* @ngInject */
        function EmployeeCtrl($scope, ngDialog, employeeService) {
            this.$scope = $scope;
            this.ngDialog = ngDialog;
            this.employeeService = employeeService;
            $scope.vm = this;
            this.employees = this.employeeService.getEmployees() || [];
        }
        EmployeeCtrl.prototype.get = function () {
            this.employees = [];
            this.employees = this.employeeService.getEmployees();
        };
        EmployeeCtrl.prototype.openInfo = function (employee) {
            var dialog = this.ngDialog.open({
                template: 'app/partials/employees/info.html',
                controller: projectManagement.InfoCtrl,
                data: {
                    employee: employee
                }
            });
        };
        EmployeeCtrl.prototype.deleteEmployee = function (employee) {
            this.employeeService.removeEmployee(this.employees, employee);
            this.employees = this.employeeService.getEmployees();
        };
        EmployeeCtrl.prototype.openNew = function () {
            var dialog = this.ngDialog.open({
                template: 'app/partials/employees/new.html',
                controller: EmployeeCtrl
            });
        };
        EmployeeCtrl.prototype.addEmployee = function (employee) {
            this.employeeService.addEmployee(employee);
            this.$scope.closeThisDialog(employee);
            this.employees = this.employeeService.getEmployees();
        };
        return EmployeeCtrl;
    })();
    projectManagement.EmployeeCtrl = EmployeeCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=employee.controller.js.map
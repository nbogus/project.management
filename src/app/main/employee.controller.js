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
            this.ngDialog = ngDialog;
            this.employeeService = employeeService;
            $scope.vm = this;
            this.employees = employeeService.getEmployees();
        }
        EmployeeCtrl.prototype.open = function (employee) {
            var dialog = this.ngDialog.open({
                template: 'app/partials/employees/info.html',
                controller: projectManagement.InfoCtrl,
                data: {
                    employee: employee
                }
            });
        };
        return EmployeeCtrl;
    })();
    projectManagement.EmployeeCtrl = EmployeeCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=employee.controller.js.map
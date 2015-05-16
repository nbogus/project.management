///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
///<reference path="services\employee.service.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var MainCtrl = (function () {
        /* @ngInject */
        function MainCtrl($scope, ngDialog, employeeService) {
            this.ngDialog = ngDialog;
            this.employeeService = employeeService;
            $scope.vm = this;
        }
        return MainCtrl;
    })();
    projectManagement.MainCtrl = MainCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=main.controller.js.map
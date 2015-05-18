///<reference path="..\..\main\models\Employee.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var InfoCtrl = (function () {
        /* @ngInject */
        function InfoCtrl($scope) {
            this.$scope = $scope;
            $scope.vm = this;
            this.Employee = this.$scope.ngDialogData.employee.Employee;
        }
        return InfoCtrl;
    })();
    projectManagement.InfoCtrl = InfoCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=InfoCtrl.js.map
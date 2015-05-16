///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var MainCtrl = (function () {
        /* @ngInject */
        function MainCtrl($scope, ngDialog) {
            this.ngDialog = ngDialog;
            $scope.vm = this;
        }
        MainCtrl.prototype.open = function (employee) {
            var dialog = this.ngDialog.open({
                template: 'app/partials/employees/info.html',
                controller: projectManagement.InfoCtrl,
                data: {
                    employee: employee
                }
            });
        };
        return MainCtrl;
    })();
    projectManagement.MainCtrl = MainCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=main.controller.js.map
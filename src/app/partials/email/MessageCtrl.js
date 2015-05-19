///<reference path="..\..\main\models\Email.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var MessageCtrl = (function () {
        /* @ngInject */
        function MessageCtrl($scope) {
            this.$scope = $scope;
            $scope.vm = this;
            this.email = this.$scope.ngDialogData.email;
        }
        return MessageCtrl;
    })();
    projectManagement.MessageCtrl = MessageCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=MessageCtrl.js.map
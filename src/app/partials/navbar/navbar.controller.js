'use strict';
var projectManagement;
(function (projectManagement) {
    var NavbarCtrl = (function () {
        /* @ngInject */
        function NavbarCtrl($scope) {
            $scope.date = new Date();
        }
        return NavbarCtrl;
    })();
    projectManagement.NavbarCtrl = NavbarCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=navbar.controller.js.map
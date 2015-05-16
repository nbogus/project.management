'use strict';
var projectManagement;
(function (projectManagement) {
    var ProfileCtrl = (function () {
        /* @ngInject */
        function ProfileCtrl($scope) {
            $scope.date = new Date();
        }
        return ProfileCtrl;
    })();
    projectManagement.ProfileCtrl = ProfileCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=profile.controller.js.map
///<reference path="models\Employee.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var MainCtrl = (function () {
        /* @ngInject */
        function MainCtrl($scope) {
            $scope.vm = this;
            this.employees = [
                { FirstName: 'Joe', LastName: 'Doe', Office: 'Cracow', Position: 'Associate Consultant' },
                { FirstName: 'Joe1', LastName: 'Doe1', Office: 'Warsaw', Position: 'Consultant' },
                { FirstName: 'Joe2', LastName: 'Doe2', Office: 'Wroclaw', Position: 'Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' },
                { FirstName: 'Joe3', LastName: 'Doe3', Office: 'Cracow', Position: 'Senior Consultant' }
            ];
        }
        return MainCtrl;
    })();
    projectManagement.MainCtrl = MainCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=main.controller.js.map
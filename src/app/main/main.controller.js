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
            /*public DateOfBirth:string,
             public MobilePhone:string,
             public StartDate:string,
             public EmploymentStatus:string,
             public ImageUrl:string,
             public EmailAddress:string)*/
            this.employees = [{ UserName: 'JoeDoe', Password: 'password', EmployeeInfo: {
                FirstName: 'Joe',
                LastName: 'Doe',
                Office: 'Cracow',
                Position: 'Associate Consultant',
                DateOfBirth: "5-11-1980",
                MobilePhone: "765-768-912",
                StartDate: "23-11-1990",
                EmploymentStatus: "Manager",
                ImageUrl: "assets/images/ContactPhoto.png",
                EmailAddress: "joe@doe.gmail.com",
                Department: "Delivery",
                Team: "Remax",
                Address: "Cracow, Lubicz 23A"
            } }];
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
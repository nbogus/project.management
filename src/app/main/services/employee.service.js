///<reference path="..\models\Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var EmployeeService = (function () {
        /* @ngInject */
        function EmployeeService(localStorageService, _) {
            this.localStorageService = localStorageService;
            this._ = _;
            this.initEmployeesData();
        }
        EmployeeService.prototype.initEmployeesData = function () {
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
            this.saveToLocalStorage();
        };
        EmployeeService.prototype.saveToLocalStorage = function () {
            this.localStorageService.set("employees", this.employees);
        };
        EmployeeService.prototype.getEmployees = function () {
            return this.localStorageService.get("employees");
        };
        EmployeeService.prototype.removeEmployee = function (employee) {
        };
        return EmployeeService;
    })();
    projectManagement.EmployeeService = EmployeeService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=employee.service.js.map
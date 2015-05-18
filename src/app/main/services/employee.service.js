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
            this.employees = [];
            this.initEmployeesData();
        }
        EmployeeService.prototype.initEmployeesData = function () {
            /*this.employees = [<Employee>{UserName:'JoeDoe',Password:'password', EmployeeInfo: <EmployeeInfo>{
                 FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                 EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"joe@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
               <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
                 FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                 EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
              <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
                FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"AirCanada",Address:"Cracow, Lubicz 23A"}},
              <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
                FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
              <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
                FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
              <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
                FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
                EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}}
             ];*/
            this.employees = this.getEmployees() || [];
            this.saveToLocalStorage(this.employees);
        };
        EmployeeService.prototype.saveToLocalStorage = function (employees) {
            this.localStorageService.set("employees", []);
            this.localStorageService.set("employees", employees);
        };
        EmployeeService.prototype.getEmployees = function () {
            return this.localStorageService.get("employees");
        };
        EmployeeService.prototype.removeEmployee = function (employees, employee) {
            var emp = this._.first(this._.filter(employees, function (e) {
                return e.UserName == employee.UserName;
            }, employee));
            this.saveToLocalStorage(this._.without(employees, emp));
        };
        EmployeeService.prototype.addEmployee = function (employee) {
            this.employees.push(employee);
            this.saveToLocalStorage(this.employees);
        };
        return EmployeeService;
    })();
    projectManagement.EmployeeService = EmployeeService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=employee.service.js.map
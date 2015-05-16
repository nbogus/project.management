///<reference path="Project.ts"/>
///<reference path="EmployeeInfo.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var Employee = (function () {
        function Employee(UserName, Password, EmployeeInfo) {
            this.UserName = UserName;
            this.Password = Password;
            this.EmployeeInfo = EmployeeInfo;
        }
        return Employee;
    })();
    projectManagement.Employee = Employee;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Employee.js.map
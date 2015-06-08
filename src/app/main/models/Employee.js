///<reference path="Project.ts"/>
///<reference path="EmployeeInfo.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var Employee = (function () {
        function Employee(UserName, Password, EmployeeInfo, ProjectCode, Hours, Cost) {
            this.UserName = UserName;
            this.Password = Password;
            this.EmployeeInfo = EmployeeInfo;
            this.ProjectCode = ProjectCode;
            this.Hours = Hours;
            this.Cost = Cost;
        }
        return Employee;
    })();
    projectManagement.Employee = Employee;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Employee.js.map
///<reference path="Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var Employee = (function () {
        function Employee(FirstName, LastName, Office, Position) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Office = Office;
            this.Position = Position;
        }
        return Employee;
    })();
    projectManagement.Employee = Employee;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Employee.js.map
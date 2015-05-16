/**
 * Created by nbogusiewicz on 2015-05-16.
 */
///<reference path="Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var EmployeeInfo = (function () {
        function EmployeeInfo(FirstName, LastName, Office, Position, DateOfBirth, MobilePhone, StartDate, EmploymentStatus, ImageUrl, EmailAddress, Department, Team, Address) {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Office = Office;
            this.Position = Position;
            this.DateOfBirth = DateOfBirth;
            this.MobilePhone = MobilePhone;
            this.StartDate = StartDate;
            this.EmploymentStatus = EmploymentStatus;
            this.ImageUrl = ImageUrl;
            this.EmailAddress = EmailAddress;
            this.Department = Department;
            this.Team = Team;
            this.Address = Address;
        }
        return EmployeeInfo;
    })();
    projectManagement.EmployeeInfo = EmployeeInfo;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=EmployeeInfo.js.map
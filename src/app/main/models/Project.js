///<reference path="Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var Project = (function () {
        function Project(ProjectName, ProjectCode, Client, Region, Description, LatestStatus, ProjectManager) {
            this.ProjectName = ProjectName;
            this.ProjectCode = ProjectCode;
            this.Client = Client;
            this.Region = Region;
            this.Description = Description;
            this.LatestStatus = LatestStatus;
            this.ProjectManager = ProjectManager;
        }
        return Project;
    })();
    projectManagement.Project = Project;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Project.js.map
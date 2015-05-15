/**
 * Created by nbogusiewicz on 2015-05-15.
 */
var projectManagement;
(function (projectManagement) {
    var Project = (function () {
        function Project(ProjectName) {
            this.ProjectName = ProjectName;
        }
        return Project;
    })();
    projectManagement.Project = Project;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Project.js.map
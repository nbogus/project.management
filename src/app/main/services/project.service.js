///<reference path="..\models\Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-06-08.
 */
var projectManagement;
(function (projectManagement) {
    var ProjectService = (function () {
        /*
        * public ProjectName:string,
         public ProjectCode:string,
         public Client:string,
         public Region:string,
         public Description:string,
         public LatestStatus:string*/
        /* @ngInject */
        function ProjectService(localStorageService, _) {
            this.localStorageService = localStorageService;
            this._ = _;
            this.loadProjects();
        }
        ProjectService.prototype.loadProjects = function () {
            this.projects = [{ ProjectName: 'Remax', ProjectCode: 'RM007', Client: 'Remax CA & USA', Region: 'Canada', Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra ', LatestStatus: 'Finished', ProjectManager: 'Craig Wills' }, { ProjectName: 'Air Canada', ProjectCode: 'AC055', Client: 'Canada Airlines', Region: 'Canada', Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra ', LatestStatus: 'Development' }, { ProjectName: 'JP Banking', ProjectCode: 'JBP123', Client: 'JP Morgan', Region: 'USA', Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra ', LatestStatus: 'Contract Negotiation' }];
        };
        ProjectService.prototype.getProjects = function () {
            return this.projects;
        };
        ProjectService.prototype.getProjectByCode = function (code) {
            var projects = this._.filter(this.projects, function (project) {
                return project.ProjectCode == code ? project : null;
            });
            return this._.first(projects);
        };
        return ProjectService;
    })();
    projectManagement.ProjectService = ProjectService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=project.service.js.map
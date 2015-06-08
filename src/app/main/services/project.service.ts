///<reference path="..\models\Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-06-08.
 */

module projectManagement{
  export class ProjectService{
    /*
    * public ProjectName:string,
     public ProjectCode:string,
     public Client:string,
     public Region:string,
     public Description:string,
     public LatestStatus:string*/

    /* @ngInject */
    constructor( private localStorageService,
                 private _: any) {

      this.loadProjects();
    }

    public projects:Array<Project>;

    private loadProjects()
    {
      if (!this.projects) {
        this.projects = this.getProjects() || [];

        this.saveToLocalStorage(this.projects);
      }

      if (this.projects.length ==0)
      {
        this.projects = [<Project>{
          ProjectName: 'Remax', ProjectCode: 'RM007', Client: 'Remax CA & USA', Region: 'Canada',
          Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra '
          , LatestStatus: 'Finished', ProjectManager: 'Craig Wills'
        },
          <Project>{
            ProjectName: 'Air Canada', ProjectCode: 'AC055', Client: 'Canada Airlines', Region: 'Canada',
            Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra '
            , LatestStatus: 'Development'
          },
          <Project>{
            ProjectName: 'JP Banking', ProjectCode: 'JBP123', Client: 'JP Morgan', Region: 'USA',
            Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra '
            , LatestStatus: 'Contract Negotiation'
          }];
      }

    }

    public getProjects():Array<Project>
    {
      return this.localStorageService.get("projects");
    }

    public getProjectByCode(code:string):Project{
     var projects =  this._.filter(this.projects,(project)=>{
        return project.ProjectCode == code ? project : null;
      });
      return this._.first(projects);
    }

    public addProject(project)
    {
      this.projects.push(project);
      this.saveToLocalStorage(this.projects);
    }

    private saveToLocalStorage(projects:Array<Project>)
    {
      this.localStorageService.set("projects", []);
      this.localStorageService.set("projects", projects);
    }

  }
}

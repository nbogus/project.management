///<reference path="Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{
  export class Project{

    constructor(public ProjectName:string,
    public ProjectCode:string,
    public Client:string,
    public Region:string,
    public Description:string,
    public LatestStatus:string,
    public ProjectManager:string)
    {

    }

    public ProjectParticipations:Array<Employee>;

  }
}

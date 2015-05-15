///<reference path="Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{

  export class Employee{

    constructor(public FirstName:string,public LastName:string, public Office:string,public Position:string )
    {

    }

    public Project:Project;

  }
}

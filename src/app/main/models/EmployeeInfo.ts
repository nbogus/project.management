/**
 * Created by nbogusiewicz on 2015-05-16.
 */
///<reference path="Project.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{

  export class EmployeeInfo{

    constructor(public FirstName:string,public LastName:string, public Office:string,public Position:string,
    public DateOfBirth:string,
    public MobilePhone:string,
    public StartDate:string,
    public EmploymentStatus:string,
    public ImageUrl:string,
    public EmailAddress:string,
    public Department:string,
    public Team:string,
    public Address:string)
    {

    }

  }
}

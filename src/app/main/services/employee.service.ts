///<reference path="..\models\Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{
  export class EmployeeService{

    /* @ngInject */
    constructor( private localStorageService, private _: any) {
      this.initEmployeesData();
    }

    public employees:Array<Employee>;

    private initEmployeesData()
    {
      this.employees = [<Employee>{UserName:'JoeDoe',Password:'password', EmployeeInfo: <EmployeeInfo>{
          FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
          EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"joe@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
        <Employee>{UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
          FirstName:'Adam',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
          EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}}
      ];
      this.saveToLocalStorage(this.employees);
    }

    private saveToLocalStorage(employees:Array<Employee>)
    {
      this.localStorageService.set("employees", employees);
      return employees;
    }

    public getEmployees()
    {
     return this.localStorageService.get("employees");
    }

    public removeEmployee(employees:Array<Employee>,employee:Employee)
    {
      var emp = this._.first(
                        this._.filter(employees,(e:Employee)=>
                                            {return e.UserName == employee.UserName;},employee));

      this.saveToLocalStorage(this._.without(employees,emp));
    }

  }
}

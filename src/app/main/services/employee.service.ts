///<reference path="..\models\Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{
  export class EmployeeService{

    /* @ngInject */
    constructor( private localStorageService) {
      this.initEmployeesData();
    }

    public employees:Array<Employee>;

    private initEmployeesData()
    {
      this.employees = [<Employee>{UserName:'JoeDoe',Password:'password',
        EmployeeInfo: <EmployeeInfo>{
          FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
          EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"joe@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}}
      ];
      this.saveToLocalStorage();
    }

    private saveToLocalStorage()
    {
      this.localStorageService.set("employees", this.employees);
    }

    public getEmployees()
    {
     return this.localStorageService.get("employees");
    }

    public removeEmployee(employee:Employee)
    {

    }

  }
}

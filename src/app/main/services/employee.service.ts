///<reference path="..\models\Employee.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-15.
 */
module projectManagement{
  export class EmployeeService{

    /* @ngInject */
    constructor( private localStorageService, private _: any) {

    }

    public employees:Array<Employee> = [];

    public initEmployeesData()
    {

        this.employees = this.getEmployees() || [];
        this.saveToLocalStorage(this.employees);


     /* if(this.employees.length == 0)
      {
        this.employees = [<Employee>{ProjectCode:'RM007',UserName:'JoeDoe',Password:'password', EmployeeInfo: <EmployeeInfo>{
          FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
          EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"joe@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
          <Employee>{ProjectCode:'RM007',UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
            FirstName:'John',LastName:'Smith',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
            EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
          <Employee>{ProjectCode:'RM007',UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
            FirstName:'Elene',LastName:'Pol',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
            EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"AirCanada",Address:"Cracow, Lubicz 23A"}},
          <Employee>{ProjectCode:'RM007',UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
            FirstName:'Lukas',LastName:'Kowalski',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
            EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
          <Employee>{ProjectCode:'RM007',UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
            FirstName:'Cate',LastName:'Milton',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
            EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}},
          <Employee>{ProjectCode:'RM007',UserName:'ASmith',Password:'password', EmployeeInfo: <EmployeeInfo>{
            FirstName:'Erick',LastName:'Garner',Office:'Wroclaw',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
            EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"asmith@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}}
        ];
      }*/
    }

    private saveToLocalStorage(employees:Array<Employee>)
    {

      this.localStorageService.set("employees", []);
      this.localStorageService.set("employees", employees);
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

    public addEmployee(employee:Employee)
    {
      this.employees.push(employee);
      this.saveToLocalStorage(this.employees);
    }

    public updateEmployee(employee:Employee)
    {
      var emp = this._.filter(this.employees,(e:Employee)=>
                                 {return e.UserName != employee.UserName;},employee);

      this.addEmployee(employee);

    }

  }
}

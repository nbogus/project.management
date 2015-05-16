///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
'use strict';

module projectManagement {

  export class MainCtrl {
    /* @ngInject */
    constructor ($scope,
                private ngDialog:any) {
      $scope.vm = this;
/*public DateOfBirth:string,
 public MobilePhone:string,
 public StartDate:string,
 public EmploymentStatus:string,
 public ImageUrl:string,
 public EmailAddress:string)*/
        this.employees = [<Employee>{UserName:'JoeDoe',Password:'password',
                                     EmployeeInfo: <EmployeeInfo>{
         FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant',DateOfBirth:"5-11-1980",MobilePhone:"765-768-912",StartDate:"23-11-1990",
         EmploymentStatus:"Manager", ImageUrl:"assets/images/ContactPhoto.png", EmailAddress:"joe@doe.gmail.com",Department:"Delivery",Team:"Remax",Address:"Cracow, Lubicz 23A"}}
        ];
    }

    public employees:Array<Employee>;

    public open(employee):void
    {
      var dialog = this.ngDialog.open({
        template: 'app/partials/employees/info.html',
        controller: InfoCtrl,
        data: {
          employee: employee,
        }
      });

    }


  }

}

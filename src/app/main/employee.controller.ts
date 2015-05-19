///<reference path="services\employee.service.ts"/>
/**
 * Created by nbogusiewicz on 2015-05-16.
 */
///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
'use strict';

module projectManagement {

  export class EmployeeCtrl {
    /* @ngInject */
    constructor(public $scope:any,
                private ngDialog:any,
                private employeeService:EmployeeService) {
      $scope.vm = this;

       this.employees = this.employeeService.getEmployees() || [];
    }

    labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    data = [300, 500, 100];

    public employees:Array<Employee>;


    public get()
    {
      this.employees =[];
      this.employees = this.employeeService.getEmployees();
    }

    public openInfo(employee):void {
      var dialog = this.ngDialog.open({
        template: 'app/partials/employees/info.html',
        controller: InfoCtrl,
        data: {
          employee: employee,
        }
      });
    }

    public deleteEmployee(employee:Employee):void {
      this.employeeService.removeEmployee(this.employees, employee);
      this.employees = this.employeeService.getEmployees();
    }

    public openNew() {
      var dialog = this.ngDialog.open({
        template: 'app/partials/employees/new.html',
        controller: EmployeeCtrl
      });
    }

    public addEmployee(employee:Employee) {

      this.employeeService.addEmployee(employee);
      this.$scope.closeThisDialog(employee);
      this.employees = this.employeeService.getEmployees();
    }
  }

}

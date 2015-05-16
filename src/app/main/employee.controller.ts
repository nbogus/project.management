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
    constructor ($scope,
                 private ngDialog:any,
                private employeeService:EmployeeService) {
      $scope.vm = this;

      this.employees = employeeService.getEmployees();
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

    public deleteEmployee(employee:Employee):void
    {
      this.employeeService.removeEmployee(this.employees, employee);
      this.employees = this.employeeService.getEmployees();
    }

    public openNew()
    {
      var dialog = this.ngDialog.open({
        template: 'app/partials/employees/new.html',
        controller: InfoCtrl,
        data: {
          employees: this.employees,
        }
      });
    }
  }
}

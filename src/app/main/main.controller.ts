///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
///<reference path="services\employee.service.ts"/>
'use strict';

module projectManagement {

  export class MainCtrl {
    /* @ngInject */
    constructor ($scope,
                private ngDialog:any,
                 private employeeService:EmployeeService) {
      $scope.vm = this;
    }
  }
}

///<reference path="..\..\main\models\Employee.ts"/>
'use strict';

module projectManagement {

  export class InfoCtrl {
    /* @ngInject */
    constructor (public $scope:any) {
      $scope.vm = this;

      this.Employee = this.$scope.ngDialogData.employee;

    }

    public Employee:Employee;

  }
}

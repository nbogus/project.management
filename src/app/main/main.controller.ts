///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
'use strict';

module projectManagement {

  export class MainCtrl {
    /* @ngInject */
    constructor ($scope,
                private ngDialog:any) {
      $scope.vm = this;
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

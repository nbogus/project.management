///<reference path="..\..\main\models\Email.ts"/>
'use strict';

module projectManagement {

  export class MessageCtrl {
    /* @ngInject */
    constructor (public $scope:any) {
      $scope.vm = this;
      this.email = this.$scope.ngDialogData.email;
    }
    public email:Email;

  }
}

'use strict';

module projectManagement {

  interface INavbarScope extends ng.IScope {
    date: Date
  }

  export class ProfileCtrl {
    /* @ngInject */
    constructor ($scope: INavbarScope) {
      $scope.date = new Date();
    }
  }

}

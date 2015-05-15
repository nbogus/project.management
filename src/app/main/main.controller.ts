///<reference path="models\Employee.ts"/>
'use strict';

module projectManagement {

  export class MainCtrl {
    /* @ngInject */
    constructor ($scope) {
      $scope.vm = this;

      this.employees= [
        <Employee>{FirstName:'Joe',LastName:'Doe',Office:'Cracow',Position:'Associate Consultant'},
        <Employee>{FirstName:'Joe1',LastName:'Doe1',Office:'Warsaw',Position:'Consultant'},
        <Employee>{FirstName:'Joe2',LastName:'Doe2',Office:'Wroclaw',Position:'Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'},
        <Employee>{FirstName:'Joe3',LastName:'Doe3',Office:'Cracow',Position:'Senior Consultant'}
      ];
    }

    public employees:Array<Employee>;



  }

}

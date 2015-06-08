///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>

'use strict';

module projectManagement {

  export class ProjectCtrl {
    /* @ngInject */
    constructor ($scope,
                 private ngDialog:any,
                 private projectService:ProjectService,
                 private employeeService:EmployeeService,
                  $routeParams) {
      $scope.vm = projectService;
      $scope.scope = this;
    }


    public loadProjects()
    {

    }

    public openNew() {
      var dialog = this.ngDialog.open({
        template: 'app/partials/projects/new.html',
        controller: ProjectCtrl
      });
    }


  }
}

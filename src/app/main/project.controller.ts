///<reference path="services\project.service.ts"/>

'use strict';

module projectManagement {

  export class ProjectCtrl {
    /* @ngInject */
    constructor ($scope,
                 private ngDialog:any,
                 private projectService:ProjectService,
                  $routeParams) {
      $scope.vm = projectService;
    }


    public loadProjects()
    {

    }


  }
}

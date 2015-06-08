///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>

'use strict';

module projectManagement {

  export class ProjectInfoCtrl {
    /* @ngInject */
    constructor ($scope,
                 private $routeParams,
                 private projectService:ProjectService,
                 private employeeService:EmployeeService,
                private _:any){
      $scope.vm = this;
      this.Project = this.projectService.getProjectByCode(this.$routeParams['code']);
      this.employees = this.filterEmployeesByProjectCode(this.$routeParams['code'])
      this.employeeCost = this.calculateCost();
    }

    public Project:Project;
    public employeeCost;
    public employees:Array<Employee>;

    private filterEmployeesByProjectCode(code:string):Array<Employee>
    {
      var employees = this.employeeService.getEmployees();
      var projectEmployees = this._.filter(employees,(employee)=>{
        return employee.Employee.ProjectCode == code ? employee : null;
      });

      return projectEmployees;
    }

    public calculateCost()
    {
      var totalCost;
      this._.each(this.employees,(employee)=>{
       var cost =  (employee.Employee.Hours * employee.Employee.Cost);
        totalCost += cost;
      });

      return totalCost;
    }
  }
}

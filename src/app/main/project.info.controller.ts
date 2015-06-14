///<reference path="services\project.service.ts"/>
///<reference path="services\employee.service.ts"/>
///<reference path="services\task.service.ts"/>

'use strict';

module projectManagement {

  export class ProjectInfoCtrl {
    /* @ngInject */
    constructor ($scope,
                 private $routeParams,
                 private projectService:ProjectService,
                 private employeeService:EmployeeService,
                 private taskService:TaskService,
                private _:any,
                private ngDialog){
      $scope.vm = this;
      this.Project = this.projectService.getProjectByCode(this.$routeParams['code']);
      this.employees = this.filterEmployeesByProjectCode(this.$routeParams['code']);
      this.employeesAll = this.employeeService.getEmployees();
      this.employeeCost = this.calculateCost();
      this.tasks = this.taskService.getTasks();
    }

    public Project:Project;
    public employeeCost;
    public employees:Array<Employee>;
    public employeesAll:Array<Employee>;
    public tasks:Array<Task>;

    private filterEmployeesByProjectCode(code:string):Array<Employee>
    {
      var employees = this.employeeService.getEmployees();
      var projectEmployees = this._.filter(employees,(employee)=>{
        if(employee.ProjectCode)
          return employee.ProjectCode == code ? employee : null;
      });

      return projectEmployees;
    }

    public calculateCost()
    {
      var totalCost;
      this._.each(this.employees,(employee)=>{
       var cost =  (employee.Hours * employee.Cost);
        totalCost += cost;
      });

      return totalCost;
    }

    public assignEmployee(employee)
    {
      employee.ProjectCode = this.Project.ProjectCode;
      this.employeeService.updateEmployee(employee);
      this.reload();
    }

    private reload()
    {
      this.employeesAll = this.employeeService.getEmployees();
      this.tasks = this.taskService.getTasks();
    }

    private openNew()
    {
      var dialog = this.ngDialog.open({
        template: 'app/partials/tasks/newTask.html',
        controller: ProjectInfoCtrl
      });
    }

    private addTask(task:Task)
    {
      this.taskService.addTask(task)
      this.reload();
      this.ngDialog.close('close');
    }

    private removeTask(task:Task)
    {
      this.taskService.removeTask(this.tasks,task);
      this.reload();
    }

  }
}

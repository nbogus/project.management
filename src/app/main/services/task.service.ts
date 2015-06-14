///<reference path="..\models\Task.ts"/>
module projectManagement{
  export class TaskService{

    /* @ngInject */
    constructor( private localStorageService, private _: any) {
      this.tasks = this.getTasks() || [];

      this.saveToLocalStorage(this.tasks);
    }

    public tasks:Array<Task> = [];

    private saveToLocalStorage(tasks:Array<Task>)
    {
      this.localStorageService.set("task", []);
      this.localStorageService.set("tasks", tasks);
    }

    public getTasks()
    {
      return this.localStorageService.get("tasks");
    }

    public addTask(task:Task)
    {
      this.tasks.push(task);
      this.saveToLocalStorage(this.tasks);
    }

    public removeTask(tasks:Array<Task>,task:Task)
    {
      var emp = this._.first(
        this._.filter(tasks,(t:Task)=>
        {return t.TaskName == task.TaskName;},task));

      this.saveToLocalStorage(this._.without(tasks,emp));
    }


  }
}

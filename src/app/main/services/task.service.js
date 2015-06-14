///<reference path="..\models\Task.ts"/>
var projectManagement;
(function (projectManagement) {
    var TaskService = (function () {
        /* @ngInject */
        function TaskService(localStorageService, _) {
            this.localStorageService = localStorageService;
            this._ = _;
            this.tasks = [];
            this.tasks = this.getTasks() || [];
            this.saveToLocalStorage(this.tasks);
        }
        TaskService.prototype.saveToLocalStorage = function (tasks) {
            this.localStorageService.set("task", []);
            this.localStorageService.set("tasks", tasks);
        };
        TaskService.prototype.getTasks = function () {
            return this.localStorageService.get("tasks");
        };
        TaskService.prototype.addTask = function (task) {
            this.tasks.push(task);
            this.saveToLocalStorage(this.tasks);
        };
        TaskService.prototype.removeTask = function (tasks, task) {
            var emp = this._.first(this._.filter(tasks, function (t) {
                return t.TaskName == task.TaskName;
            }, task));
            this.saveToLocalStorage(this._.without(tasks, emp));
        };
        return TaskService;
    })();
    projectManagement.TaskService = TaskService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=task.service.js.map
var projectManagement;
(function (projectManagement) {
    var Task = (function () {
        function Task(TaskName, Description, StartDate, EndDate, EmployeeName, Estimation) {
            this.TaskName = TaskName;
            this.Description = Description;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
            this.EmployeeName = EmployeeName;
            this.Estimation = Estimation;
        }
        return Task;
    })();
    projectManagement.Task = Task;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Task.js.map
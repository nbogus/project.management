var projectManagement;
(function (projectManagement) {
    var Email = (function () {
        function Email(Subject, FirstReceiver, SecondReceiver, Message, Date) {
            this.Subject = Subject;
            this.FirstReceiver = FirstReceiver;
            this.SecondReceiver = SecondReceiver;
            this.Message = Message;
            this.Date = Date;
        }
        return Email;
    })();
    projectManagement.Email = Email;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=Email.js.map
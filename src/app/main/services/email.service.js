///<reference path="..\models\Email.ts"/>
var projectManagement;
(function (projectManagement) {
    var EmailService = (function () {
        /* @ngInject */
        function EmailService(localStorageService, _) {
            this.localStorageService = localStorageService;
            this._ = _;
            this.emails = [];
            this.emails = this.getEmails() || [];
            this.saveToLocalStorage(this.emails);
        }
        EmailService.prototype.saveToLocalStorage = function (emails) {
            this.localStorageService.set("emails", []);
            this.localStorageService.set("emails", emails);
        };
        EmailService.prototype.getEmails = function () {
            return this.localStorageService.get("emails");
        };
        EmailService.prototype.addEmail = function (email) {
            this.emails.push(email);
            this.saveToLocalStorage(this.emails);
        };
        return EmailService;
    })();
    projectManagement.EmailService = EmailService;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=email.service.js.map
///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
///<reference path="services\employee.service.ts"/>
///<reference path="services\email.service.ts"/>
///<reference path="..\partials\email\MessageCtrl.ts"/>
'use strict';
var projectManagement;
(function (projectManagement) {
    var MailCtrl = (function () {
        /* @ngInject */
        function MailCtrl($scope, emailService, ngDialog) {
            this.emailService = emailService;
            this.ngDialog = ngDialog;
            this.emails = [];
            $scope.vm = this;
            this.emails = this.emailService.getEmails();
        }
        MailCtrl.prototype.sendEmail = function (email) {
            email.Date = new Date();
            this.emailService.addEmail(email);
        };
        MailCtrl.prototype.openInfo = function (email) {
            var dialog = this.ngDialog.open({
                template: 'app/partials/email/message.html',
                controller: projectManagement.MessageCtrl,
                data: {
                    email: email
                }
            });
        };
        return MailCtrl;
    })();
    projectManagement.MailCtrl = MailCtrl;
})(projectManagement || (projectManagement = {}));
//# sourceMappingURL=mail.controller.js.map
///<reference path="models\Employee.ts"/>
///<reference path="..\partials\employees\InfoCtrl.ts"/>
///<reference path="services\employee.service.ts"/>
///<reference path="services\email.service.ts"/>
///<reference path="..\partials\email\MessageCtrl.ts"/>
'use strict';

module projectManagement {

  export class MailCtrl {
    /* @ngInject */
    constructor ($scope,
                 public emailService:EmailService,
                 private ngDialog:any) {

      $scope.vm = this;
      this.emails = this.emailService.getEmails();
    }

    public emails:Array<Email>=[];

    public sendEmail(email:Email) {
      email.Date = new Date();
      this.emailService.addEmail(email);
    }

    public openInfo(email):void {
      var dialog = this.ngDialog.open({
        template: 'app/partials/email/message.html',
        controller: MessageCtrl,
        data: {
          email: email,
        }
      });
    }
  }
}


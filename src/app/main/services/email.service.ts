///<reference path="..\models\Email.ts"/>
module projectManagement{
  export class EmailService{

    /* @ngInject */
    constructor( private localStorageService, private _: any) {
      this.emails = this.getEmails() || [];

      this.saveToLocalStorage(this.emails);
    }

    public emails:Array<Email> = [];

    private saveToLocalStorage(emails:Array<Email>)
    {
      this.localStorageService.set("emails", []);
      this.localStorageService.set("emails", emails);
    }

    public getEmails()
    {
      return this.localStorageService.get("emails");
    }

    public addEmail(email:Email)
    {
      this.emails.push(email);
      this.saveToLocalStorage(this.emails);
    }


  }
}

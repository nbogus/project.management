
module projectManagement{

  export class Email{

    constructor(public Subject:string,
                public FirstReceiver:string,
                public SecondReceiver:string,
                public Message:string,
                public Date:Date )
    {

    }
  }
}

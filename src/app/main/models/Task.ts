
module projectManagement{
  export class Task{

    constructor(public TaskName:string,
                public Description:string,
                public StartDate:Date,
                public EndDate:Date,
                public EmployeeName:string,
                public Estimation:string
                )
    {

    }
  }
}

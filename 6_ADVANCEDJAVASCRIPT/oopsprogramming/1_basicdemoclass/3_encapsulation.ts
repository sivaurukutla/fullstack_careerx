class myapplication
{
     private id:number;
     private name:string;
     private salary:number;

    constructor(id:number,name:string,salary:number)
    {
       this.id=id;
       this.name=name;
       this.salary=salary;
    }
     public getsalary():number{
        return this.salary;
     }
     public setsalary(salary:number,enteredotp:number)
     {
        this.salary=salary;
     }
     public getotp():number
     {
      var otp=math.random()*10000;
      console.log(otp)
      return otp;
     }

    }

var m1=new myapplication(101,"siva",200000)
console.log(m1);
console.log(m1.getsalary());

class employee
{
   constructor(id,name,salary)
   {
    this.id=id;
    this.name=name;
    this.salary=salary
   }
    printemployeedetails()
    {

       document.writeln("employee id: "+this.id+ "<br> employee name:"+this.name+"<br>employee salery:"+this.salary)
    }
}
var emp1=new employee(101,"siva",200000);
var emp2=new employee(102,"satish", 200000);
var emp3=new employee(103,"lova", 200000);
 emp1.printemployeedetails()
  document.write("<hr height='5px'>")
 emp2.printemployeedetails();
 document.write("<hr height='5px'>")
emp3.printemployeedetails();

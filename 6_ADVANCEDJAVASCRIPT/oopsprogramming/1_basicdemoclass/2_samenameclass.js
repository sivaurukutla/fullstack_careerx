var x=200;
console.log(x);
var x=300;
console.log(x);

// in javascript the two same class names are occured errors
class person
{
constructor(id,name,email)
{
    this.id=id;
    this.name=name;
    this.email=email;
}
display(){
console.log(this)

}
}
var p1=new person(101,"siva","sivaurukutla2002@gmail.com");

var p2=new person(102,"satish","satishurukutla2002@gmail.com")
p1.display();
p2.display();


class people
{
constructor(id,name,phono)
{
    this.id=id;
    this.name=name;
    this.phono=phono;
}
show(){
console.log(this)

}
}
var p1=new people(101,"siva",7730907577);
    //console.log(p1.name)
    p1.name="abcde"// manupliation
var p2=new people(102,"satish",73736676)
p1.show();
p2.show();
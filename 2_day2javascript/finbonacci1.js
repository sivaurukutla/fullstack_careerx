     var v1="abc" //file scoped vaiable
function fibo()
{
     v1=10;     //function scope variable
     v2="hello world";
    var v3=true;
    var v4=[10,20,30,40];
const pi=30.8;
    console.log("pi "+pi)
     pi=20.98;
    console.log("pi "+pi)

    console.log(" <br>v1: "+typeof(v1) )
    console.log("<br>v2: "+ typeof(v2))
    console.log("<br>v3: "+ typeof(v3))
    console.log("<br>v4: "+ typeof(v4))
    {
        var i1=100;
        let i2=200;  //block-scoped variable cannot accessed outside of this curly brackets
        console.log("i1= "+i1)
        console.log("i2= "+i2)
    }
   console.log("i1= "+i1)
    console.log("i2= "+i2)


  
}
fibo();
console.log( "v1= "+v1)  //ifu want to print variable last u have  to declare variable as  global or file scoped


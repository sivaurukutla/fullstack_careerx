function outer()    //clouser is a combination of function within the function.
{
   const data={one:1,two:2};

function inner()  
{
    console.log(data);
}
 inner();
}
 outer()


 function hello(){
    var i=30;
console.log(i);
 
 function hihello(){
    console.log(i)
 }
 hihello();
}
 hello();
 
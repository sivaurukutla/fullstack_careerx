var x=100;
function hello()
{
   y=1000;           //hoisting allows first only the top of the function.
    console.log(y);   
    var y;
}
hello();
console.log(y);

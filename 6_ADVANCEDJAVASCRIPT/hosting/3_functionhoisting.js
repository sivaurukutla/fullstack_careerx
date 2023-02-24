greet();
//this is the function declaration
function greet()
{
    console.log("welcome to advanced conceptin javascript");

}

//function expression(IIFE=imediately invoked function expression)

greet();
let greet=function()
{
    console.log('i am not eligible for hoisting');
}
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
 
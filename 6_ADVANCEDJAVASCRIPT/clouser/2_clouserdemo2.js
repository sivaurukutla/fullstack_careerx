function generator()
{
    var no=1;
    function checkno()
    {
        console.log(no);
    }
    no++;
    return checkno;
    
    
}
var g=generator();
g();
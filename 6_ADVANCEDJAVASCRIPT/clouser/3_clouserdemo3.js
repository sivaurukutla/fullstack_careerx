var x=10;
function first(farg)
{
    var y=20;
    function child1(carg)
    {
        var z=30;
        return child2(x+farg+y+carg+z);
    }
    function child2(no)
    {
        return no*-1;
    }
    return child1
}
var f=first(5);
console.log(f(15));
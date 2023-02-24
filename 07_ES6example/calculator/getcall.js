import  {sum as sum} from './call';
import  {mul as mul}from './call';

function operation()
{
    let a=parseInt(document.getElementById('no1').value);
    let b=parseInt(document.getElementById('no2').value);
    var result;
    if(type=="add")
    result=sum(a,b)
    else
    result=mul(a,b)
document.write("result is:" +result)

}
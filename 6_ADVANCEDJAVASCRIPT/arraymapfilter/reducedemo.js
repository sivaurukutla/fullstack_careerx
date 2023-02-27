var arr=[34,12,75,35,38,36,75,35];
console.log('actual element array is:');
console.log(arr);
let arr1=arr.reduce(function(accumulator,currentvalue){
    if(accumulator.indexOf(currentvalue) === -1)
    {accumulator.push(currentvalue);}
    return accumulator;

},[]);
console.log("unique element array is :");
console.log(arr1);
var shape={
    radius:25,
    name:'circle',
}
function printdetails(shape1){
    console.log(shape1+  "   this is the default shape...");
    console.log("radius :" +this.radius);
    console.log("shape type :" +this.name);
}
//apply function printdetails as field/proprety of shape class
printdetails.apply(shape,['cylinder']); //apply method we givedata in the form of array.
console.log('===================================================');
printdetails.call(shape,['cylinder']);


//examlpe2
function sample(a,b,c){
    console.log('sample'  ,a,b,c);
}
sample.apply([1,2,3]);


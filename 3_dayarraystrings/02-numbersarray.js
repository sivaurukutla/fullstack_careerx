var numbers=[30,50,40,60,90,10,20,80];
var name=["siva","lova","pdp","satish","rama","kndp"];
console.log(numbers);
console.log(name);

numbers=numbers.sort();
name=name.sort();
console.log("...............................after sorting...............................................");
console.log(numbers);
console.log(name);

numbers.push(100);//adding new element at last of arry
name.pop();//removes last element from array

console.log(numbers);
console.log(name);

var combined=
console.log(numbers.join());  //join returns the array in same line

numbers[0]=100;
numbers[numbers.length]=111;
numbers[numbers.length/2]=999;
console.log(numbers);

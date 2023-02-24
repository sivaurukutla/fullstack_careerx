var arr=[34,67,85,19,50,30,91,37];
console.log(arr);
evenarray=arr.map(e=>e%2);  // map is applying some object means add ,div ,mul
console.log(evenarray);


console.log('filter example=================================================')

var arr=[34,67,85,19,50,30,91,37];
console.log(arr);
squares=arr.map(e=>e*e);  // map is applying some object means add ,div ,mul
console.log(evenarray);
evenarray=arr.filter(e=>e%2==0);//filter method gets the number which we give
console.log(evenarray)

//example
const emails=['sivaurukutla2002@gmail.com','lova2gmail.com','ram@fmail.com','satish2mail.com'];
console.log(emails.map(e=>e.toUpperCase()));
var newarray=emails.filter(e=>e.endsWith('@gmail.com'));
console.log(newarray);


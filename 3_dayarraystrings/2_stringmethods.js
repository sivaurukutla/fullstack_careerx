var tittle="careerx PVT LTD.";

console.log("company name is of"+tittle.length+"character length");
var last=tittle.length-1;
console.log("last character of tittle is:"+tittle.charAt(last));

console.log("the tittle ends with LTD.?"+tittle.endsWith('LTD.'));
 var email="abc@gmail.com";
 var atsymbol=email.includes('@');
 var comsymbol=email.includes('.com');
 if(atsymbol && comsymbol)
 console.log(email+"is valid email id");
 else
 console.log(email+"is not valid email id")
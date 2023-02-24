var countries=["INDIA","AMERICA","CANADA","RUSSIA","ITALI","ROME"];

countries.forEach(country=>console.log(country.toLowerCase()+ ":"+country.length));

var crt=countries.filter(country=>country.includes('A'));
console.log(ctr);



//email example
var emails=["sivaurukutla2002@gmail,com","sivauruku@123","sivaurukutla@yho"];

var gmails=emails.filter(e=>e.includes('gmail'));
console.log(gmails);


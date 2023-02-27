var data=new Object();//or var object{};
 data['siva']='7730907577';
 data['durga']='9132407657';      //it doesnt allow the duplicate value
 data['satish']='9133568378';
 data['durga']='920007567';
 console.log(data);

 console.log("phno of satish :"+data['satish']);
var element=document.getElementById('data').innerHTML;
element+='<ul>';
 for(var key in data) //var key in data tells no of elements in the data
 {
    var item='<li>'+key+":"+data[key]+"</li>";
    element+=item;
 }

 element+='</ul>'
 document.getElementById('data').innerHTML=element; 




 var student=new Object();

 student['siva']='full stack developer';
 student['satish']='front end dop';
 student['durga']='full stack developer';
 student['moin']='full stack developer';
 student['kishore']='back end dop';
 student['sravani']='full stack developer';
 console.log(student);
 console.log("siva position: " +student['siva'])

 var data=document.getElementById('student').innerHTML;

 data+='<ul>'
 for(var key in student){
   var item='<li>'+key+':'+student[key] +"</li>"
   data+=item;
 }
 data+='</ul>'
 document.getElementById('add').innerHTML =Element;






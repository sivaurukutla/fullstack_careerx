var d=document.getElementById('data')
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>d.innerhtml= data(null));
 
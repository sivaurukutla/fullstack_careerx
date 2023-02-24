var d=document.getElementById('data')
fetch('products.json')
.then(response=>response.json())
.then(data=>d.innerhtml=data);
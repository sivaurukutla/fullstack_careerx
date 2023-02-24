async function getproducts(){
    var response=fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok)
    console.log('error occured');
    return (await response).json();
    

}
const promise=getproducts();
promise.then(data=>console.log(data));

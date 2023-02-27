var mymap=new Map();
 mymap.set('one','monday');  //map always take two values
 mymap.set('two','tuesday');
  mymap.set('three','wednesday');
  mymap.set('four','thursday');
  mymap.set('five','friday');
  mymap.set('six','saterday');
  mymap.set('seven','sunday');

  console.log(mymap);

  console.log("there are "+mymap.size+" elements in map");
  mymap.delete('three');
  console.log(mymap);

  console.log("my map contains four as key  "+mymap.has('four'));

  console.log(mymap.get('six'));
  //there are the methods of the map ex,,map.size,has,get,delete.....etc.
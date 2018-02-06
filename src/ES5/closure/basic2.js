var a = 1;
const test = (() => {

    var a = 2;
    console.log(a); // works  but scope of a defined here is local to the function
  })();    
  
  console.log(a); // works but scope is global
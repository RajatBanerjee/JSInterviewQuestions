const test = (() => {
    var a = 1;
    console.log(a); // works
  })();    
  console.log(a); // fails since a is not in scope
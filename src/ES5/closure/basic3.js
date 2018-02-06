var a = 1;
const test = (() => {
    a = 2;
    console.log(a); // works , but modifies a global variable
  })();  

  console.log(a); // works and scope is global
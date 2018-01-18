outer = function(value) {
    
    var inner = function(value2) {
      console.log(value +value2);
    }
    return inner; // this returns a function
  }
  
  var fnc = outer(2); // execute outer to get inner 
  var fnc1 = outer(3); // execute outer to get inner 
  fnc(4); // holds the scope of variable fnc

  fnc1(6)//holds the scope of fnc1
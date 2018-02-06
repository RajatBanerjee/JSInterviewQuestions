outer = function(value) {
    var a = value;
    var inner = function() {
      console.log(a);
    }
    return inner; // this returns a function
  }
  
  var fnc = outer(2); // execute outer to get inner 
  var fnc1 = outer(3); // execute outer to get inner 
  fnc(); // holds the scope of variable fnc

  fnc1()//holds the scope of fnc1
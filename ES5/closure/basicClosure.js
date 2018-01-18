outer = function() {
    var a = 1;
    var inner = function() {
      console.log(a);
    }
    return inner; // this returns a function
  }
  
  var fnc = outer(); // execute outer to get inner 
  fnc(); // holds the scope of outer function

  outer()();
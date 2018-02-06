/**bind works in the same way as APPLY or call 
 * but DOES NOT INVOKE THE FUNCTION . It returns the function*/

 var print = function (param1, param2) {
    console.log(this.value , param1 , param2)
}

var cls =  {
    value :"asd"
}

//explicitly passing the context
var x = print.bind(cls,"ola","amigos")

x();
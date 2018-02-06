var print = function (param1, param2) {
    console.log(this.value , param1 , param2)
}

var cls =  {
    value :"asd"
}

//explicitly passing the context
print.call(cls,"ola","amigos")
/** apply is same as call */
/**it can spread the arguments */
var print = function (param1,param2) {
    console.log(this.value , param1 , param2)
}

var cls =  {
    value :"asd"
}

var msgs = ["ola","amigos"]
//explicitly passing the context
print.apply(cls,msgs)
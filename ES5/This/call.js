var print = function () {
    console.log(this.value)
}

var cls =  {
    value :"asd"
}

//explicitly passing the context
print.call(cls)
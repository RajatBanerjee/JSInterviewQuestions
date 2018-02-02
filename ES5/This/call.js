var print = function () {
    console.log(this.value)
}

var cls =  {
    value :"asd"
}

print.call(cls)
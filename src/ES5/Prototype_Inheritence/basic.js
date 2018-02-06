function job() {
    var _salary = 1000
    this.pays = true;
   
}

job.prototype.print = function (params) {
    console.log(this.pays? 'hire me' : ' thanks')
}

var instance = new job(); 

console.log(instance._salary) //undefined since private variable
console.log(instance.pays) //works , since its made public
instance.print() //works , since its made public
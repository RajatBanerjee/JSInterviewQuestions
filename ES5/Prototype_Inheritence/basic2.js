function job() {
    var _salary = 1000
    this.pays = true;

    this.printSalary = function (params) {
        
        return _salary;
    }
   
}

//method print is attached to prototype of base class job
job.prototype.print = function (params) {
    console.log(this.pays? 'hire me' : ' thanks')
}

var instance = new job(); 

console.log(instance._salary) //undefined since private variable
console.log(instance.pays) //works , since its made public
console.log(instance.printSalary());
instance.print() //works , since its made public
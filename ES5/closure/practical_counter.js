
// variable is not globallly declared
const inc =(()=>{
    var counter = 0;
    
    return add  =()=>{
       return counter = counter +1
    }
})();


console.log(inc())
console.log(inc())
console.log(inc())
console.log(inc())

/***********************    OR  *********************/


// variable is not globallly declared
const inc1 =()=>{
    var counter = 0;
    
    return add  =()=>{
       return counter = counter +1
    }
};

//this will work as closure since this instance holds the value
var increment =inc1();

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
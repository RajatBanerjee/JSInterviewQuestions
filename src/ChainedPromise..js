var request = require ('request' );


function a(value,next) {
    // request('https://jsonplaceholder.typicode.com/posts/'+value,function(error,response){
    //     console.log(response.body);
    //     next();
    // })

    setTimeout(function(){
        console.log(value);
        next();
    },1000)
    
   }
      
  
   let values =[1,2,3,4,5]
   let fns = [a,a,a,a,a];
   
   // chain function will call the supplied function
   // and recursively call the chain function with the
   // the next element in the array
   function chain(fn) {
     if(fn) {
       fn(values.shift(),() => chain(fns.shift()));
     }
   }
   
   // start the chain with the first element in the array
   chain(fns.shift());
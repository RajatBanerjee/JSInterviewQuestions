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
   let fns = [];

   values.forEach(function(item){
        fns.push({call:a,value:item})
   })
   
   function chain(fn) {
     if(fn) {
       fn.call(fn.value,function(){
        chain(fns.shift());
       }) 
     }
   }
   
   // start the chain with the first element in the array
   chain(fns.shift());
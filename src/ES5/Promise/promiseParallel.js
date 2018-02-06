var request = require ('request' );

function makeAPicall(id) {

    const newPromise = new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/posts/'+id, function (error, response) {

            if (error)
                reject(error)
            else{
                console.log(response.body)
                resolve(response.body)
            }

        });
    });
       
return newPromise;    
}


/**promise ALL style */
Promise.all([
    makeAPicall(1),
    makeAPicall(2),
    makeAPicall(3)])
    .then((data)=>{
        // console.log(data[0])
        // console.log(data[1])
        // console.log(data[2])
    });
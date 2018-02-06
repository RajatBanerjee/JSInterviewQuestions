var request = require ('request' );

function makeAPicall() {

    const newPromise = new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/posts/', function (error, response) {

            if (error)
                reject(error)
            else
                resolve(response.body)

        });
    });
       
return newPromise;    
}

var api = makeAPicall();

makeAPicall().then((resp)=>{
    console.log(resp)
}).catch((error)=>{
    console.error(error)
});

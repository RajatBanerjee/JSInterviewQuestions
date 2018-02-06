/**https://www.youtube.com/watch?v=568g8hxJJp4&t=115s */
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

async function ex(){
    try{
        var data = await makeAPicall()
        console.log(data)
    }catch(Error){
        console.log(Error)
    }    
}

ex()


var request = require ('request' );

function makeAPicall(id) {

    const newPromise = new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/posts/'+id, function (error, response) {

            if (error)
                reject(error)
            else
                resolve(response.body)

        });
    });
       
return newPromise;    
}

/**callback style chain */
makeAPicall(1).then((resp)=>{
    console.log(resp);
    makeAPicall(2).then((resp)=>{
        console.log(resp)
        makeAPicall(3).then((resp)=>{
            console.log(resp)
        })
    })
})
.catch((error)=>{
    console.error(error)
});

/*return style*/
makeAPicall(1).then((resp)=>{
    console.log(resp); 
    return makeAPicall(2)
}).then((resp)=>{
    console.log(resp);
    return makeAPicall(3)
}).then((resp)=>{
    console.log(resp);
})
.catch((error)=>{
    console.error(error)
});
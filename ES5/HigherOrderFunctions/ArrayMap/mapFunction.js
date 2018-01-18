
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.map(function (word) {
    return word +"_blah"
});

/*es6*/

let wor = words.map((x)=> x+ "_blah")
console.log(wor)
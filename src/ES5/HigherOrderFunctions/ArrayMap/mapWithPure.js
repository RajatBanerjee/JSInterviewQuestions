
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

function AddBlah(param) {
    return param+ "_blah"
}
let longWords = words.map(AddBlah);

console.log(longWords)
/**https://www.youtube.com/watch?v=BMUiFMZr7vk */

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];


function animalFilter(param) {
   return param.length >6
}
let longWords = words.filter(animalFilter);

console.log(longWords)
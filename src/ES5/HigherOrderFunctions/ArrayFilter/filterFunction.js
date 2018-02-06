/**https://www.youtube.com/watch?v=BMUiFMZr7vk */

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

let longWords = words.filter(function (word) {
    return word.length > 6
});

console.log(longWords)
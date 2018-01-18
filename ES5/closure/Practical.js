/**
 * https://stackoverflow.com/questions/36636/what-is-a-closure
 * 
 */
const regular = () => {
  for (var j = 1; j < 3; j++) {
      setTimeout(() => {
        console.log(j)
      }, 1000);
    }
}

const Closure = () => {
  for (var i = 1; i < 3; i++) {
    (function (i) {

      setTimeout(() => {
        console.log(i)
      }, 1000);
    })(i)
  }
}
regular();

Closure();
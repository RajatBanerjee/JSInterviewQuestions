// array to sort
var array = [9, 11, 2, 5, 12, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(arr) {
  var i, len = arr.length, el, j;

  for (i = 1; i < len; i++) {
    el = arr[i];
    j = i;

    console.log(`Value being processed ${el}`)

    while (j > 0 && arr[j - 1] > el) {
      console.log(`Inserting ${arr[j - 1]} at position ${j}`)
      arr[j] = arr[j - 1];
      j--;
    }
    console.log(`Exterior: inserting ${el} at position ${j}`)

    arr[j] = el;
    console.log(`End of ${i} pass, array is ${arr}`)
  }

  return arr;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
/*http://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort*/

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] += arr[j + 1]
        arr[j + 1] = arr[j] - arr[j + 1]
        arr[j] -= arr[j + 1]
      }
    }
  }
  console.log(arr)
}
bubbleSort([7, 5, 2, 4, 3, 9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9, 7, 5, 4, 3, 1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1, 2, 3, 4, 5, 6]); //[1, 2, 3, 4, 5, 6]

 /**Bubble Sort [Best: O(n), Worst:O(N^2)] */
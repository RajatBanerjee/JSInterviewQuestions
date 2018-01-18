/*http://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort*/
function bubbleSort(arr){
    var len = arr.length;

    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j])   {
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1]=temp
        }
      }
    }
    console.log( arr);
 }

// function bubbleSort () {
//     const numElements = alist.length
//     for (let outer = numElements; outer >= 2; outer--) {
//       for (let inner = 0; inner <= outer - 1; inner++) {
//         if (alist[inner] > alist[inner + 1]) {
//           swap(inner, inner + 1)
//         }
//       }
//     }
//   }

 bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
 bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
 bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]

 /**Bubble Sort [Best: O(n), Worst:O(N^2)] */
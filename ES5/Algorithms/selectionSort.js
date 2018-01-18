/**
 * Go through the array, find the index of the lowest element swap the lowest element with the first element. 
 * Hence first element is the lowest element in the array.
 * Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.
 */
/*http://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort*/
function selectionSort(arr){
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      console.log(arr);
    }
 
  }


  selectionSort([7,5,2,4,3,1]); //[2, 3, 4, 5, 7, 9]
//   selectionSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
//   selectionSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]

/*http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/

/*O N(2)*/
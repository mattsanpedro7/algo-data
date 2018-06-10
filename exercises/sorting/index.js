// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      // swap
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
      // console.log(arr);
    }
  }

  // return sorted array
  return arr;
}

// "prove me wrong" algorithm
function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

function mainBubble() {
  const arr = [2, 9, 94, 8, 4, 5, 10, 26, 13, 99, 52];

  bubbleSort(arr);
}
// mainBubble();

function mainSelectionSort() {
  const arr = [2, 9, 94, 8, 4, 5, 10, 26, 13, 99, 52];

  
}
mainSelectionSort();

module.exports = { bubbleSort, selectionSort, mergeSort };

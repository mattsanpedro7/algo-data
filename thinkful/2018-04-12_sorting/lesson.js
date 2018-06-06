/*
*
  BUBBLE SORT

  swap: function simply swaps tha values at two indices in an array

  bubbleSort: 
  -looks through adjacent pairs of values in the array
  -if values in wrong order, it swaps them and increases swaps counter

  Best case: O(n) nodes already in order, check each pair once
  Worst case: O(n^2) each value needs swapping with each other
  Average case: O(n^2)
*
*/
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }
  // console.log(swaps);

  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
};
// const arr = [2, 5, 67, 7, 34, 99, 12, 101];
// console.log(bubbleSort(arr));

/*
*
  MERGE SORT
  A divide and conquer approach to sorting


*
*/
function mergeSort(array) {
  // base case for one or zero elements
  if (array.length <= 1) {
    return array;
  }

  // slice the array into two halves
  // sort each half by recursively callings mergeSort
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  console.log('LEFT', left);
  console.log('RIGHT:', right);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

/*
*
  MERGE function

  two sorted halves are merged together in correct order

  Best, average, and worst case performances of O(nlog(n))
*
*/
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};
const arr = [2, 5, 67, 7, 34, 99, 12, 101];
console.log(mergeSort(arr));

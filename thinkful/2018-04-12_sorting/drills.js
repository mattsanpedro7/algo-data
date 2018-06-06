/**
*
  TEST ARRAY
*
*/
const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// /**
// *
//   QUICK SORT
// *
// */
// let countQ = 0;

// function qSort(array, start = 0, end = array.length) {
//   start = start;
//   end = end;
//   if (start >= end) {
//     return array;
//   }
//   const middle = partition(array, start, end);
//   array = qSort(array, start, middle);
//   array = qSort(array, middle + 1, end);
//   return array;
// };

// function partition(array, start, end) {
//   const pivot = array[end - 1];
//   countQ++;
//   // console.log('pivot', pivot);
//   let j = start;
//   for (let i = start; i < end - 1; i++) {
//     if (array[i] <= pivot) {
//       swap(array, i, j);
//       j++;
//     }
//   }
//   swap(array, end - 1, j);
//   return j;
// };

// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// };

// // const testArr = [9,4,3,6,2,1,8,3]
// // console.log(qSort(testArr));

// qSort(arr);
// // console.log(arr);
// console.log('Operations to solve qSort:', countQ);

// /*
// *
//   MERGE SORT
//   A divide and conquer approach to sorting


// *
// */
// let countM = 0;

// function mSort(array) {
//   // base case for one or zero elements
//   if (array.length <= 1) {
//     return array;
//   }

//   // slice the array into two halves
//   // sort each half by recursively callings mSort
//   const middle = Math.floor(array.length / 2);
//   let left = array.slice(0, middle);
//   let right = array.slice(middle, array.length);

//   // console.log('LEFT', left);
//   // console.log('RIGHT:', right);
//   countM++;

//   left = mSort(left);
//   right = mSort(right);
//   return merge(left, right, array);
// };

// /*
// *
//   MERGE function

//   two sorted halves are merged together in correct order

//   Best, average, and worst case performances of O(nlog(n))
// *
// */
// function merge(left, right, array) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let outputIndex = 0;
//   countM++;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       array[outputIndex++] = left[leftIndex++];
//     } else {
//       array[outputIndex++] = right[rightIndex++];
//     }
//   }

//   for (let i = leftIndex; i < left.length; i++) {
//     array[outputIndex++] = left[i];
//   }

//   for (let i = rightIndex; i < right.length; i++) {
//     array[outputIndex++] = right[i];
//   }
//   return array;
// };
// // const arr = [2, 5, 67, 7, 34, 99, 12, 101];
// mSort(arr);
// console.log('Operations to solve mSort:', countM);

/**
*
  BUCKET SORT
*
*/
// const arrTest = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14];

// function bSort(array) {
//   // console.log(Math.min(...array));
//   let B = [];


//   const max = Math.max(...array);
//   const min = Math.min(...array);

//   const bucket = 10;
//   const divider = Math.ceil((max + 1) / bucket);
//   console.log('min:', min, 'max:', max, 'bucket size:', bucket, 'divider:', divider);

//   // if loop below
//   for (let i = 0; i < array.length; i++) {
//     const j = Math.floor(array[i] / divider);
//     // console.log(j);
//     B[j,i] = array[i];
//     // console.log(B);
//   }
//   // console.log(B);
//   // console.log(B[0,4]);
// }
// // bSort(arrTest);
// // console.log(arr);
// bSort(arr);

const arrTest = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14];

function  insertionSort(array) {
  length = array.length;
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    for (let j = i - 1; j >=0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }

  return array;
}
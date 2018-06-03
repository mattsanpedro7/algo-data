// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// // solution #1: obvious iterative solution
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     console.log('last:', last, 'element:', element);      

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//     console.log('chunked:', chunked);
//   }
//   return chunked;
// }

// solution #2: slice and while loop
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    console.log(chunked);
    
    index = index + size;
  }
  return chunked;
}

chunk([1, 2, 3, 4, 5], 2);

module.exports = chunk;

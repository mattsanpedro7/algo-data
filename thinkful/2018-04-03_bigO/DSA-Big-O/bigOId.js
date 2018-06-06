// EVEN OR ODD
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}
/*
  O(1)

  Since we're only working with one operation (simple true or false - boolean),
  the value is implied as one number and not an array. 
*/

// ARE YOU HERE?
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
      const el1 = arr1[i];
      // console.log('i loop:', el1);
      
      for (let j=0; j<arr2.length; j++) {
          const el2 = arr2[j];
          if (el1 === el2) return true;
          // console.log('j loop', el2);
      }
  }
  return false;
}
/*
  O(n^2)

  It is a nested loop that marches through each arr1 index
  to check against each arr2 index.  This is two-dimensional.
*/
const arrA = [1,2,3];
const arrB = [3,4,5];
areYouHere(arrA, arrB);

// DOUBLER
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
      array[i] *= 2;
  }
  return array;
}
/*
  O(n)

  Only marching once through the array to obtain a product.  

*/

// NAIVE SEARCH
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
      if (array[i] === item) {
          return i;
      }
  }
}
/*
  O(n)

  There is no nested for loop in the function.  Since only a single item
  is trying to match an index in the array, it is linear.
*/

// CREATING PAIRS
function createPairs(arr) {
  let count = 1;
  
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log('count: ' + count + '; ' +arr[i] + ", " +  arr[j] );
      count++;
    }
  }
  // console.log('array:', arr);
}
/*
  input:  2 3 4 5  6  7  8  9  10 ... 100
  output: 1 3 6 10 15 21 28 36 45 ... 4950

  1E3 = 1000
  1E6 = 1000000
*/
// createPairs([1,2,3,4,5]);
// createPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
/*
  O(n^2)

  Nested for loop.  As the number of indexes (n) increases by 1,
  the number of pairs generated increases by (n-1).
*/

// COMPUTING FIBONACCIS
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      // console.log(i);
      result.push(0);
    }
    
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      // console.log(i);      
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      // console.log(i, 'Calc this');
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  // console.log(result);
  
  return result;
}
generateFib(10);
/*
  O(n)

  There is no inner for loop in the function.  
  The function analyzes the value by turning it into an array:
  [0, 1, 2, 3, ..., n]
  where n is the value inputted by the user.
*/

// AN EFFICIENT SEARCH
// assume that array is always sorted
// python tutor to find what is happening
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;
  let count = 0;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];
      console.log(item, 'TOP:\t', 'current index:', currentIndex, 'current element:', currentElement);
      
      if (currentElement < item) {
          minIndex = currentIndex + 1;
          console.log('IF:', 'current index:', currentIndex, 'current element:', currentElement);
          
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
          console.log('ELSE IF:', 'current index:', currentIndex, 'current element:', currentElement);
      }
      else {
          return currentIndex;
          console.log('ELSE:', 'current index:', currentIndex, 'current element:', currentElement);
          
      }
  }
  return -1;
}
// efficientSearch([1,2,3,4,5,6,7,8,9,10], 1)
// efficientSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 1);
/*
  O(log(n))

  Each search divides the data set by two, making it an efficient search.
  Searching for item = 1 with an n of 10 ([1, 2, ... 9, 10]) takes 5 checkpoints.
  Searching for item = 1 with an n of 100 ([1, 2, ... 99, 100]) takes 10 checkpoints.
  

  input:  n = 10 100
  output:     5  10 
*/

// RANDOM ELEMENT
function findRandomElement(arr) {
  const ans = arr[Math.floor(Math.random() * arr.length)];
  console.log(ans);
  return ans;
}
findRandomElement([1,2,3,4,5,6,7,8,9,10]);
/*
  O(1)

  Assuming there is no performance decrease by Math.random, 
  the function wioll march through the array and return one randomized value.
  Thus, it is a constant big O.
*/


// IS IT PRIME?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  // O(1)
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  // O(n)
  for (let i = 2; i < n; ++i) {
      console.log(i);
      
      if (n % i == 0) return false;
  }
  return true;
}
isPrime(10);
/*
  O(1)

  O(n)
*/

/*
isEven has constant run time complexity (O(1))
areYouHere has polynomial run time complexity (O(n^2))
doubleArrayValues has linear run time complexity (O(n))
naiveSearch has linear run time complexity (O(n))
createPairs has polynomial run time complexity (O(n^2))
generateFib has linear run time complexity (O(n))
efficientSearch has logarithmic run time complexity (O(log n))
findRandomElement has constant run time complexity (O(1)).
isPrime has linear run time complexity (O(n))
*/
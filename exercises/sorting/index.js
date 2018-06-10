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
  console.log('initial arr:');
  console.log(arr);
  
  for (let i = 0; i < arr.length; i++) {
    const indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        const lesser = arr[j];
        arr[j] = arr[indexOfMin];
        arr[indexOfMin] = lesser;
      }
    }

    // console.log(arr);
    
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // if (right.length) {
  //   result.push(...right);
  // } else if (left.length) {
  //   result.push(...left);
  // }

  console.log(result);
  // 
  return [...result, ...left, ...right];
}

function mainBubble() {
  const arr = [2, 9, 94, 8, 4, 5, 10, 26, 13, 99, 52];

  bubbleSort(arr);
}
// mainBubble();

function mainSelectionSort() {
  const arr = [2, 9, 94, 8, 4, 5, 10, 26, 13, 99, 52];

  selectionSort(arr);
}
// mainSelectionSort();

function mainMerge() {
  const left = [-35, 5];
  const right = [9, 43];

  merge(left, right);
}
mainMerge();

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

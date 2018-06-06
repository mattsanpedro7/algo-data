/**
 * Performs a linear search on the host array. Mainly for illustrative purposes,
 * as the built-in Array#indexOf() method is good at this.
 */
function linearFindIndexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

/**
 * Performs a binary search on the host array. This method can either be
 * injected into Array.prototype or called with a specified scope like this:
 * binaryIndexOf.call(someArray, searchElement);
 *
 * @param {array} array The array being seached.
 * @param {*} value The item being looked for.
 * @param {Number} start The index at which to begin searching.
 * @param {Number} start The end at which to stop searching.
 * @return {Number} The index of the element which defaults to -1 when not found.
 */
function binaryFindIndexOf(array, value, start = 0, end = array.length) {
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item === value) {
    return index;
  } else if (item < value) {
    return binaryFindIndexOf(array, value, index + 1, end);
  } else if (item > value) {
    return binaryFindIndexOf(array, value, start, index - 1);
  }
}

function testLinearEfficiency(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i + 1;
    }
  }
  return -1;
}

function testBinaryEfficiency(
  array,
  value,
  start = 0,
  end = array.length,
  count = 0
) {
  count++;
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item === value) {
    return count;
  } else if (item < value) {
    return testBinaryEfficiency(array, value, index + 1, end, count++);
  } else if (item > value) {
    return testBinaryEfficiency(array, value, start, index - 1, count++);
  }
}

export { testLinearEfficiency, testBinaryEfficiency };

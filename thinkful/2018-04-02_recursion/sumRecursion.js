let a;

function sumOf(list) {
  // base case
  if (list.length === 1) {
    return list[0];
  }

  // general case
  console.log(list[0], '+', list.slice(1));
  // a = list[0] + sumOf(list.slice(1));
  // console.log('current sum is:', a);

  return list[0] + sumOf(list.slice(1));
}

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));

function upperStr(str) {
  if (str === "") {
    return "";
  }

  const newChar = str[0].toUpperCase();

  // Concatenate new data with reduced string for next iteration...
  return newChar + upperStr(str.slice(1));
}
upperStr('hello');
console.log(upperStr('hello'));

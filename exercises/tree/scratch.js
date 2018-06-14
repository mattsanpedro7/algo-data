let arr = [1, 2, 3];

arr = arr.filter(element => {
  return element > 0;
});

console.log(arr);

arr.shift();

console.log(arr);

// review on recursion
// set defaults
function printNumber(n, dec=1) {
  // base case
  if (n === 0) {
    return;
  }

  console.log(n);
  
  // change argument here
  printNumber(n - dec)
}

printNumber(10, 2);
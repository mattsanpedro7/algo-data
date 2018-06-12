// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // solution #1: iterative
// function fib(n) {
//   let seq = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     seq.push(seq[i-1] + seq[i-2]);
//   }

//   return seq[n];
// }

function memoize(fn) {
  // a record of all previous calls
  const cache = {};
  // ...args => don't know how many arguments this will receive
  return function(...args) {
    console.log(args);
    
    if (cache[args]) {
      return cache[args];
    }

    // apply?  MDN
    // console.log('this:', this);
    
    const result = fn.apply(this, args);
    cache[args] = result;

    console.log('cache:', cache);
    
    return result;
  };
}

fib = memoize(fib);
console.log(fib(50));

// solution #2: recursive
// exponential time solution
// let count = 0;
function fib(n) {
  if (n < 2) {
    return n;
  }

  return (fib(n-1) + fib(n-2));
}

// console.log(fib(15));

module.exports = fib;

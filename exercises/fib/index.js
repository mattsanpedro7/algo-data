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

// solution #2: recursive
// exponential time solution
let count = 0;
function fib(n) {
  count++;
  // base case
  if (n < 2) {
    return n;
    console.log('count', count);
    
  }

  // n=2    1     +    0    = 1
  // n=3    1     +    1    = 2
  // n=4    2     +    1    = 3
  // n=5    3     +    2    = 5
  // n=6    5     +    3    = 8
  return fib(n-1) + fib(n-2);
}

console.log(fib(15));

module.exports = fib;

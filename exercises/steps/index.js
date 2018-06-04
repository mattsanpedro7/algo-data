// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // my solution
// function steps(n) {
//   if (n < 0) {
//     console.log('Please input a positive number.');
//     return;
//   }
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i) + ' '.repeat(n - i));
//   }
// }

// // solution # 1: author iterative
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
    
//   }
// }

// solution # 1: author recursion
function steps(n, row = 0, stair = '') {
  // base case
  if (n === row) {
    return; 
  }
 
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }
  
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  
  steps(n, row, stair)
}

steps(4);

module.exports = steps;

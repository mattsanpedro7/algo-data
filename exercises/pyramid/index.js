// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// // my solution
// function pyramid(n) {
//   // determine width of pyramid
//   const width = 2*n - 1;

//   // determine middle of pyramid
//   const mid = Math.floor(width/2);

//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < width; column++) {
//       if (column > (mid + row) || column < (mid - row) ) {
//         stair += ' ';
//       } else {
//         stair += '#';
//       }
//     }
//     console.log(stair);
    
//   }
// }

// // solution #1: author iterative
// function pyramid(n) {
//   // calculate midpoint of row
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// solution #2: author recursion
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

pyramid(10)

module.exports = pyramid;

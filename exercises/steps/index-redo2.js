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

// solution # 1: author recursion
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//       let stair = '';
//       for (let j = 0; j < n; j++) {
//         if (j <= i) {
//             stair += '#';
//         } else {
//             stair += ' ';
//         }
//     } 

//     console.log(stair);
//   }
// }

// sultion # 2: recursion
function steps(n, row = 0, stair = '') {
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

  steps(n, row, stair);
}

steps(4);

module.exports = steps;
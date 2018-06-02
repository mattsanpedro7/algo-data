// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution #1
  // return (str.split('').reverse().join(''))

  // // solution #2
  // let revStr = [];
  // // should avoid for loops like this
  // for (let i = str.length; i>str.length; i--) {
  //   revStr.push(str[i]);
  // }
  // return revStr.join('');

  // // solution #3
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  //   // console.log(reversed);
  // }
  // return reversed;

  // // solution #4
  // // reduce takes 2 arguments: 1) arrow func, 2) starting init val for func
  // return str.split('').reduce((reversed, character) => {
  //   console.log(reversed, character);
  //   return character + reversed;
  // }, '');

  // solution #5
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

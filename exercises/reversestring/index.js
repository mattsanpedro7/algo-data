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

  // solution #2
  let revStr = [];
  for (let i = str.length; i--; i>str.length) {
    revStr.push(str[i]);
  }
  return revStr.join('');
}

reverse('apple');

module.exports = reverse;

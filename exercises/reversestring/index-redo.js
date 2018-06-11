// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #1
// function reverse(str) {
//   let result = [];

//   for (char in str) {
//     console.log(str[char]);
//     result.unshift(str[char]);
//   }

//   console.log(result.join(''));
//   return result.join('');
// }

function reverse(str) {
  const result = str.split('').reverse().join('');
  console.log(result);
  
  return result;
  ;
}

reverse('Whatup!');

module.exports = reverse;

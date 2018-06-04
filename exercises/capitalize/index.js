// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution # 1: my solution
function capitalize(str) {
  const arr = str.split('');
  let words = [];
  for (let char in arr) {
    if (!arr[char-1] || arr[char-1] === ' ') {
      words.push(arr[char].toUpperCase());
    } else {
      words.push(arr[char]);
    }
  }

  return (words.join(''));
}

// // solution # 1: author solution
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return (words.join(' '));
  
// }

// // solution # 2: author solution
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     (str[i-1] === ' ') 
//       ? result += (str[i].toUpperCase())
//       : result += (str[i]);
//   }

//   return result;
  
// }

console.log((capitalize('a short sentence?'))); 

module.exports = capitalize;

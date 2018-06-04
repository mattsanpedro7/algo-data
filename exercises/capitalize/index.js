// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split('');
  
  for (let char in arr) {
    if (!arr[char-1] || arr[char-1] === ' ') {
      arr[char] = arr[char].toUpperCase();
    }
  }

  return (arr.join(''));
}

console.log(capitalize('a short sentence.')); 

module.exports = capitalize;

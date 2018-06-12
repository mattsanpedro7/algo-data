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
  const words = str.split('');
//   console.log(words);
  let result = [];
  
  for (let i = 0; i < words.length; i++) {
    if (!words[i-1] || words[i-1] === ' ') {
        // console.log(words[i]);
        result.push(words[i].toUpperCase());
    } else {
        result.push(words[i]);
    }
  }

  console.log(result.join(''));
  return result.join('');
}

console.log((capitalize('a short sentence?'))); 

module.exports = capitalize;

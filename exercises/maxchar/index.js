// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// // solution #1 my thoughts
// function maxChar(str) {
//   let chars = {};
//   let maxC = {
//     char: '',
//     num: 0
//   };
//   // normalize all letters
//   str = str.toLowerCase();

//   // populate char object with counts
//   for (let char in str) {
//     console.log(char, str[char], chars[char]);
//     chars[str[char]] = chars[str[char]] + 1 || 1;
//   }

//   // determine highest count char
//   for (let char in chars) {
//     console.log(char, chars[char]);
//     if (chars[char] > maxC.num) {
//       maxC.char = char;
//       maxC.num = chars[char];
//     } 
    
//   }

//   return maxC.char;
// }

// solution #2: author
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {charMap[char]++;}
    else {charMap[char] = 1;}
  }

  console.log(charMap);
  
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxChar('abcccccccdsdfggfgdsdfggAfdfghafffadsfggfgdsfg');


module.exports = maxChar;

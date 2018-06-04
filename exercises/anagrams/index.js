// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution #1: my solution
// function anagramFilt(str) {
//   const trans = str.toLowerCase().split('').sort();
//   const filt = trans.filter((item) => item !== ' ' && item !== '!').join('');
//   return filt;
// }

// function anagrams(stringA, stringB) {
//   console.log(anagramFilt(stringA));
//   console.log(anagramFilt(stringB));
//   return (anagramFilt(stringA) === anagramFilt(stringB));
// }

// // solution #2: author
// // helper function
// function buildCharMap(str) {
//   const charMap = {};
  
//   // regex and toLowerCase
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   console.log(aCharMap);
  

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     console.log(aCharMap[char]);
    
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// solution #2: author
// helper function
function buildCharMap(str) {
  
}

function anagrams(stringA, stringB) {
  
}

anagrams('Rail safety', 'fairy tales');

module.exports = anagrams;

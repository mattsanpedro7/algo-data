// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
function vowels(str) {
  let count = 0;
  vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  strNorm = str.toLowerCase();

  for (let char in strNorm) {
    for (let vowel of vowelsArr) {
      if (strNorm[char] === vowel) {
        count++
        console.log(char, vowel, 'count:', count);
      }
    }
    
  }

  return count;  
}

// solution # 2: alternative solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

vowels('Why do you ask?');

module.exports = vowels;

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev);
}

// // solution #1
// function palindrome(str) {
//   const reversed = reverse(str);
//   return str === reversed;
// }

// solution #2; not ideal but more to talk about
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  });
}

console.log(palindrome('abbac'));

// console.log(reverse('hello'));


module.exports = palindrome;

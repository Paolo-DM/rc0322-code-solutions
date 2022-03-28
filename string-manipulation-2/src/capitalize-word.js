/* exported capitalizeWord */

// define a function with a word as parameter
// if the word lowercased is equal to the string "javascript", return "JavaScript"
// return a string that is the result of the concatenation of:
// the first char of the word capitalized + the rest of the characters of the word
// lowercased

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

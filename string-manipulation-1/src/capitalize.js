/* exported capitalize */

// Create a function with a string as parameter
// inside the function code block, return the concatenation of the expression
// that capitalizes the first char of the word with the toUpperCase method and
// than combines it with the other characters of the word from the index 1 (with
// the slice method) in lowercase (with toLowerCase method)

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

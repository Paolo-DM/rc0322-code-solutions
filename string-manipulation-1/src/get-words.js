/* exported getWords */

// Create a function with a string as parameter
// inside the function code block, create an if statement checking if the
// string has at least one character.
// if the condition is true, return an array created with the split method
// that divides the string in substrings separated by empty space.
// if the condition is false, return an empty array
function getWords(string) {
  if (string.length > 0) {
    return string.split(' ');
  }
  return [];
}

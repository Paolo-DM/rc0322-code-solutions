/* exported isLowerCased */
// Create a function with a word as parameter
// inside the function code block, create a variable i and assign it an initial
// value of 0
// use a while loop to loop from the first to the last character of the word
// use an if statement with a condition expression in parentheses to check if
// the char at the current index is NOT lowercase.
// if the condition is evaluated to true, return false.
// if the condition is evaluated to false, increment the variable i and return true.

function isLowerCased(word) {
  var i = 0;
  while (i < word.length) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
    i++;
  }
  return true;
}

/* exported reverseWord */
// Create a function with a single word as parameter
// inside the function code block, create a variable to hold a new empty array
// and assign it an array (chars)
// declare a variable called i equal to the last index of the word
// use a while loop to loop from the last to the first character of the word
// and push to the new array the current character, then decrease the index.
// After the while loop, create a new string with the join method with an empty
// string as argument to concatenate all of the elements of the new array previously
// created.

function reverseWord(word) {
  var chars = [];
  var i = word.length - 1;
  while (i >= 0) {
    chars.push(word[i]);
    i--;
  }
  return chars.join('');
}

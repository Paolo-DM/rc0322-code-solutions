/* exported capitalizeWords */
// define a function with a string as parameter
// create a variable to hold a new empty array and assign it the array
// create a variable to hold a new  array and assign it the lowercased words in
// the string
// iterate through the array of words and capitalize the first char of each word
// than push to the empty array, then return a string joining the array with a blank space

function capitalizeWords(string) {
  var wordsUpper = [];
  var words = string.toLowerCase().split(' ');
  for (var word of words) {
    wordsUpper.push(word[0].toUpperCase() + word.slice(1));
  }
  return wordsUpper.join(' ');
}

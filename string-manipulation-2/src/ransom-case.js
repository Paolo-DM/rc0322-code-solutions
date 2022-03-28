/* exported ransomCase */

// define a function with a string as parameter
// create a variable to hold a new array in which assign the letters of the string
// lowercased
// iterate through the array and capitalize its every-other character
// return a new string obtained from the letters array with the join method

function ransomCase(string) {
  var letters = string.toLowerCase().split('');
  for (var i = 1; i < letters.length; i += 2) {
    letters[i] = letters[i].toUpperCase();
  }
  return letters.join('');
}

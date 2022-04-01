/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.split('').sort().join('').replaceAll(' ', '');
  var second = secondString.split('').sort().join('').replaceAll(' ', '');
  if (first === second) {
    return true;
  }
  return false;
}

// define a new function with 2 parameters (firstString and secondString)
// create a new variable and assign it the result of the expression that
// splits the firstString in an array, sort the array, than creates a new string
// from the array and finally deletes all spaces from the string
// do the same also for the secondString
// if the two sorted (and without spaces) strings are equal, return true
// return false otherwise

/* exported isPalindromic */
// define a new function with a string as parameter
// split the string, reverse the array resulting from the split method, and
// than use the join method to create a new string (that's reversed).
// check if the reversed string is equal to the original string (both without spaces)
// if the condition evaluates to true, return true
// return false otherwise

function isPalindromic(string) {
  var reversedString = string.split('').reverse().join('');

  if (reversedString.replaceAll(' ', '') === string.replaceAll(' ', '')) {
    return true;
  }
  return false;
}

/* exported includes */

// define a new function with 2 parameters, an array and a value
// iterate the array checking if the current element is equal to the value passed
// if the condition of the if statement is true, return true
// return false otherwise

function includes(array, value) {
  for (var element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}

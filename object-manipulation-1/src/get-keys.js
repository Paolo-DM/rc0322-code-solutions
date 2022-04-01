/* exported getKeys */

// define a new function with one parameter (object)
// create a variable to hold a new empty array ad assing it the array
// iterate through the object keys with a for in loop and push the key in the new array
// when the for in loop is completed, return the new array

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

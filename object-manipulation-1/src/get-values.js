/* exported getValues */

// define a new function with one parameter (object)
// create a variable to hold a new empty array ad assing it the array
// iterate through the object keys with a for in loop and push
// the current key value in the new array at each iteration of the loop
// when the for in loop is completed, return the new array with the values

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}

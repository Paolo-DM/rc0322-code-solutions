/* exported flatten */

// define a function with an array as parameter
// craeate a variable to hold a new empty array and assign it an array
// iterate through the array and check if the current iterated element is
// an array or not with the isArray method.
// if the condition is satisfied, push the current element to the array created
// if not, push the elements of the current array element to the created array
// using the spread operator
// return the array

function flatten(array) {
  var flattenedArray = [];
  for (var element of array) {
    if (!Array.isArray(element)) {
      flattenedArray.push(element);
    } else {
      flattenedArray.push(...element);
    }
  }
  return flattenedArray;
}

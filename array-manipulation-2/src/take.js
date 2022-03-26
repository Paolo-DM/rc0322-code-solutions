/* exported take */

// define a new function with 2 parameters, an array and a count variable
// create a variable to hold a new empty array and assign it an array
// if the array given as argument is empty return the empty array
// iterate through the array a "count" number of times and push
// the i-th element of the array to the new array
// return the new array

function take(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (var i = 0; i < count; i++) {
    arr.push(array[i]);
  }

  return arr;
}

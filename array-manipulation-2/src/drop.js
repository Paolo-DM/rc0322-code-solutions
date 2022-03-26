/* exported drop */

// define a new function with 2 parameters, an array and a count variable
// create a variable to hold a new empty array and assign it an array
// if the array given as argument is empty return the empty array
// iterate through the array starting from the count-th index and push
// the i-th element of the array to the new array
// return the new array

function drop(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }

  return arr;

}

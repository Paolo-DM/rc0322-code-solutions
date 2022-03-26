/* exported dropRight */
// define a new function with 2 parameters, an array and a count variable
// create a variable to hold a new empty array and assign it an array
// if the count variable is larger than the length of the array, return a shallow
// copy of the array
// iterate through the array starting from the index 0 till the index
// "array.length - count" and push the i-th element of the array to the new array
// return the new array

function dropRight(array, count) {
  var newArr = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }

  return newArr;
}

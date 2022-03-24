/* exported reverse */

// Create a function with an array as argument
// inside the function code block, create a variable to hold a new empty array
// and assign it an array
// declare a variable "index" and assign it an initial value of array.length - 1
// (the ending index of the array)
// use a while loop to loop from the last element of the arry to the first one.
// inside the loop, push the element of the array given as argument at the current
// index into the new array
// decrease the value of index
// when the loop is completed, return the new array

function reverse(array) {
  var values = [];
  var index = array.length - 1;
  while (index >= 0) {
    values.push(array[index]);
    index--;
  }
  return values;
}

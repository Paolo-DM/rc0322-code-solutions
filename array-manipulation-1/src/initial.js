/* exported initial */

// Create a function with an array as argument
// inside the function code block, create a variable to hold a new empty array
// and assign it an array
// declare a variable "index" and assign it an initial value of 0
// use a while loop to loop from the first element of the array (at index 0) to
// the second-last one.
// inside the loop, push the element of the array given as argument at the current
// index into the new array
// increment the value of index
// when the loop is completed, return the new array

function initial(array) {
  var values = [];
  var index = 0;
  while (index < array.length - 1) {
    values.push(array[index]);
    index++;
  }
  return values;
}

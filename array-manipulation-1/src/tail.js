/* exported tail */

// Create a function with an array as argument
// inside the function code block, create a variable to hold a new empty array
// and assign it an array
// declare a variable "index" and assign it an initial value of 1
// use a while loop to loop from the second element of the arry (at index 1) to
// the last one.
// inside the loop, push the element of the array given as argument at the current
// index into the new array
// increment the value of index
// when the loop is completed, return the new array

function tail(array) {
  var values = [];
  var index = 1;
  while (index < array.length) {
    values.push(array[index]);
    index++;
  }
  return values;
}

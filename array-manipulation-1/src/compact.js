/* exported compact */

// Create a function with an array as argument
// inside the function code block, create a variable to hold a new empty array
// and assign it an array
// create a variable falsyValues to hold a new array and assign it an array with falsy values inside
// declare a variable "index" and assign it an initial value of 0
// use a while loop to loop from the first element of the arry to the last one.
// inside the loop, put an if statement to check if the falsyValues array does NOT
// include elements equals to that of the argument array at the current index
// if the condition of the if statement is truthy,push the element of the array
//  given as argument at the current index into the new array
// increment the value of index
// when the loop is completed, return the new array

function compact(array) {
  var values = [];
  var falsyValues = [false, null, NaN, 0, -0, undefined, ''];
  var index = 0;
  while (index < array.length) {
    if (!falsyValues.includes(array[index])) {
      values.push(array[index]);
    }
    index++;
  }
  return values;
}

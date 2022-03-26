/* exported truncate */

// define a function with two parameters (length and a string)
// in the function code block return a new string starting from index 0 of the
// argument string to "length" and concatenate it with an ellipsis.

function truncate(length, string) {
  return string.slice(0, length) + '...';
}

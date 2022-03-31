/* exported equal */
// define a function with 2 array as parameters (first and second)
// in case the two arrays have different lengths, return false
// iterate through the elements of the arrays to check if theres is any difference
// and return false if the condition is satisfied
// return true if there are no differences between the two arrays

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

/* exported unique */
// define a function with an array as parameter
// create a new Set (a collection of UNIQUE values) passing it the array
// as argument
// convert back the set to array using the Array.from method and then return it.

function unique(array) {
  var noDuplicates = new Set(array);
  return Array.from(noDuplicates);
}

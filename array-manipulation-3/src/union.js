/* exported union */
// define a function with 2 array as parameters (first and second)
// create a new Set starting from the concatenation of the first and second array
// the Set will not have repeated values, create and return a new Array starting
// from the Set

function union(first, second) {
  return Array.from(new Set(first.concat(second)));
}

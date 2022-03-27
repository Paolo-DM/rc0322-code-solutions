/* exported invert */

// define a function with a "source" object as parameter
// create a variable to hold a new empty object and assign it an object
// create a variable to hold an array of the source object entries (key/value pairs)
// iterate through the entries array and assign to the new object the inverted key/value
// by switching the indexes of the entries array
// after the loop return the object

function invert(source) {
  var outputObj = {};
  var entries = Object.entries(source);

  for (var i = 0; i < entries.length; i++) {
    outputObj[entries[i][1]] = entries[i][0];
  }
  return outputObj;
}

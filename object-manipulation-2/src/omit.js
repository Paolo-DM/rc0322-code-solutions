/* exported omit */
// define a function with 2 parameters (a source object and an array of keys)
// create a variable to hold a new empty object and assign it an object
// iterate through the properties in the source object with a for in loop
// and if the keys array does NOT includes the current key AND its value is != undefined
// give to the empty object the key/value pair and after the loop return the object

function omit(source, keys) {
  var obj = {};

  for (var key in source) {
    if (!keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}

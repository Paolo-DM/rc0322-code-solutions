/* exported toObject */

// define a new function with one parameter (an array with a string and a value)
// return a new object with the key equal to the first element of the array
// and the value equal to the second element of the array

function toObject(keyValuePair) {
  /* var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj; */
  return { [keyValuePair[0]]: keyValuePair[1] };
}

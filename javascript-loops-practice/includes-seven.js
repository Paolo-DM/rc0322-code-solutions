/* exported includesSeven */
function includesSeven(array) {
  // return (array.includes(7));
  var i = 0;
  while (i < array.length) {
    if (array[i] === 7) {
      return true;
    }
    i++;
  }
  return false;
}

/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArr = [];
  for (var value of values) {
    if (value === null) {
      continue;
    }
    newArr.push(value);
  }
  return newArr;
}

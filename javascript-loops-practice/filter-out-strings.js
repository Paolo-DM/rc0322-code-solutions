/* exported filterOutStrings */
function filterOutStrings(values) {
  var arrNoStrings = [];
  for (var value of values) {
    if (typeof value === 'string') {
      continue;
    }
    arrNoStrings.push(value);
  }
  return arrNoStrings;
}

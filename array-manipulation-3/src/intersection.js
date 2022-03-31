/* exported intersection */
function intersection(first, second) {
  var out = [];
  for (var el of first) {
    for (var el2 of second) {
      if (el === el2) {
        out.push(el);
      }
    }
  }
  return out;
}

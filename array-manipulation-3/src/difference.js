/* exported difference */
function difference(first, second) {
  var out = [];
  for (var el of first) {
    if (!second.includes(el)) {
      out.push(el);
    }
  }
  for (var el2 of second) {
    if (!first.includes(el2) && !out.includes(el2)) {
      out.push(el2);
    }
  }
  return out;
}

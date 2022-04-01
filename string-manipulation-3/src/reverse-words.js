/* exported reverseWords */
function reverseWords(string) {
  var subStrArr = string.split(' ');
  var subStr = [];

  for (var i = 0; i < subStrArr.length; i++) {
    for (var j = subStrArr[i].length; j >= 0; j--) {
      subStr.push(subStrArr[i][j]);
    }
    subStr.push(' ');
  }
  subStr.pop(' ');
  return subStr.join('');
}

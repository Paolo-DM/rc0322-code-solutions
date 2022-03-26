/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  return string.slice(0, firstIndex + 1).replace(string.charAt(firstIndex), string.charAt(secondIndex)) + (string.slice(firstIndex + 1)).replace(string.charAt(secondIndex), string.charAt(firstIndex));
}

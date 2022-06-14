/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const next = stack.pop();
    if (max < next) {
      max = next;
    }
  }
  return max;
}

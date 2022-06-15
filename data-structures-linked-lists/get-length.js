/* exported getLength */

function getLength(list) {
  let count = 1;
  while (list.next) {
    count++;
    list = list.next;
  }
  return count;
}

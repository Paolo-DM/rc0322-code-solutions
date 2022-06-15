/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const temp = list;
    list = list.next;
    temp.next = list.next;
    list.next = temp;
    return list;
  }
  return list;
}

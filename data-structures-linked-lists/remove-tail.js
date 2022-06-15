/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }

  let prev = list.data;
  let tail = list.next;

  while (tail.next !== null) {
    prev = tail;
    tail = tail.next;
  }

  prev.next = null;
  return list;
}

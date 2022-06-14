/* exported takeFront */

function takeFront(queue) {
  return queue.peek() === undefined ? undefined : queue.dequeue();
}

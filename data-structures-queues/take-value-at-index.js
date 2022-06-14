/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let front = null;
  for (let i = 0; i < index; i++) {
    front = queue.dequeue();
    if (front === undefined) {
      return undefined;
    }
    queue.enqueue(front);
  }
  return queue.dequeue();
}

function chunk(array, size) {
  var newArr = [];
  var chunkArr = [];
  var lastChunk = [];

  for (let i = 0; i < array.length; i += size) {
    for (let j = i; j < i + size; j++) {
      if (j > array.length - 1) {
        break;
      }
      chunkArr.push(array[j]);
      if (chunkArr.length === size) {
        newArr.push(chunkArr);
        chunkArr = [];
      }
    }
  }

  if (array.length % size !== 0) {
    for (let i = (array.length - array.length % size); i < array.length; i++) {
      lastChunk.push(array[i]);
    }
    newArr.push(lastChunk);
  }
  return newArr;
}
chunk(['foo', 'bar', 'baz', 'qux'], 2);
chunk([false, true, false, true], 3);

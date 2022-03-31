/* exported zip */

// define a function with two arrays as parameter (first and second)
// create a variable to hold a new empty array and assign it an array (zippedArr)
// check wich array is the smallest and assign its values to a variable (shortestArr)
// iterate through the shortest array and push a subarray into the zippedArr with
// the i-th element from the arrays given as argument
// return the zippedArr

function zip(first, second) {
  var zippedArr = [];

  if (first.length <= second.length) {
    var shortestArr = [...first];
  } else {
    shortestArr = [...second];
  }

  for (let i = 0; i < shortestArr.length; i++) {
    zippedArr.push([first[i], second[i]]);
  }

  return zippedArr;
}

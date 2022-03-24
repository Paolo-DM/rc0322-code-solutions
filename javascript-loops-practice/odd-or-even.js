/* exported oddOrEven */
function oddOrEven(numbers) {
  var odds = [];
  for (var number of numbers) {
    if (number % 2 === 0) {
      odds.push('even');
    } else {
      odds.push('odd');
    }
  }
  return odds;
}

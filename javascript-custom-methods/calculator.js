/* exported calculator */
var calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  sumAll(numbers) {
    var sum = 0;
    for (var num of numbers) {
      sum += num;
    }
    return sum;
  },
  getAverage(numbers) {
    var sum = 0;
    var count = 0;
    for (var num of numbers) {
      sum += num;
      count++;
    }
    return sum / count;
  }
};

exports.digit_sum = (number) => {
  const sum = number
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum
}
 
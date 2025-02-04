exports.digit_sum = (number) => {
  // if(number.toString().("-")) {
  //   console.log("yes")
  // }
  const sum = Math.abs(number)
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum
}
 
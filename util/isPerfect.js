exports.is_perfect = (number) => {
  // Initialize a variable temp to store the sum of factors
  var temp = 0;

  // Iterate through numbers from 1 to half of the input number to find factors
  for (var i = 1; i <= number / 2; i++) {
    // Check if i is a factor of the input number
    if (number % i === 0) {
      // If i is a factor, add it to the sum
      temp += i;
    }
  }

  // Check if the sum of factors is equal to the original number and not zero
  if (temp === number && temp !== 0) {
    // If true, log that it is a perfect number
    return true;
  } else {
    // If false, log that it is not a perfect number
    return false;
  }
}
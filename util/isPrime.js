exports.isPrime = (number) => {
  if ((number % 2 === 0 && number !== 2) || number <= 1) {
    return false;
  }

  const limit = Math.floor(Math.sqrt(number));

  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
 
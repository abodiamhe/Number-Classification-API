exports.isArmstrong = (number) => {
  let sum = 0;
  const numberString = number.toString();
  const numberOfDigits = numberString.length;

  for (let i = 0; i < numberOfDigits; i++) {
    sum += Math.pow(Number(numberString[i]), numberOfDigits);
  }
  
  return sum === number;
};

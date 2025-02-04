exports.isArmstrong = (number) => {
  let sum = 0;
  const positiveNum = Math.abs(number)
  const numberString = positiveNum.toString();
  const numberOfDigits = numberString.length;

  for (let i = 0; i < numberOfDigits; i++) {
    sum += Math.pow(Number(numberString[i]), numberOfDigits);
  }
  if (sum === positiveNum) {
    return "armstrong";
  }
};

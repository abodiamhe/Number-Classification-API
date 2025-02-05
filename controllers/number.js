const { isPrime } = require("../util/isPrime");
const { is_perfect } = require("../util/isPerfect");

const { isArmstrong } = require("../util/isArmstrong");
const { digit_sum } = require("../util/sum");
const { fetchFunFact } = require("../models/api");

exports.getNumber = async (req, res, next) => { 
  const num = req.query.number;
  if (!num) {
    res.status(400).json({ number: null, error: true });
    return;
  }
  let properties = [];

  // try {
  const intNum = parseInt(num, 10);
  if (isNaN(intNum)) {
    res.status(400).json({ number: num, error: true });
    return;
  }




  if (isArmstrong(intNum)) {
    properties.push("armstrong");
  }
  properties.push(intNum % 2 === 0 ? "even" : "odd");

  const fetchFun = await fetchFunFact(intNum);

  res.status(200).json({
    number: intNum,
    is_prime: isPrime(intNum),
    is_perfect: is_perfect(intNum),
    properties,
    digit_sum: digit_sum(intNum),
    fun_fact: fetchFun,
  });
};

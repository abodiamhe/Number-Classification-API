const { isPrime } = require("../util/isPrime");
const { is_perfect } = require("../util/isPerfect");
const { isArmstrong } = require("../util/isArmstrong");
const { parity } = require("../util/parity");
const { digit_sum } = require("../util/sum");
const { fetchFunFact } = require("../models/api");

exports.getNumber = async (req, res, next) => {
  const num = req.query.number;
  const intNum = parseInt(num, 10);

  try {
    if (isNaN(intNum)) {
      throw new Error("Not a number");
    }

    const fetchFun = await fetchFunFact(intNum);

    res.status(200).json({
      number: intNum,
      is_prime: isPrime(intNum),
      is_perfect: is_perfect(intNum),
      properties: isArmstrong(intNum)
        ? [isArmstrong(intNum), parity(intNum)]
        : [parity(intNum)],
      digit_sum: digit_sum(intNum),
      fun_fact: fetchFun,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

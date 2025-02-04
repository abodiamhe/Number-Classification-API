const { isPrime } = require("../util/isPrime");
const { is_perfect } = require("../util/isPerfect");
const { isArmstrong } = require("../util/isArmstrong");
const { parity } = require("../util/parity");
const { digit_sum } = require("../util/sum");
const { fetchFunFact } = require("../models/api");

exports.getNumber = async (req, res, next) => {
  const num = +req.query.number || 0;

  try {
    const fetchFun = await fetchFunFact(num);

    res.status(200).json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: is_perfect(num),
      properties: isArmstrong(num)
        ? [isArmstrong(num), parity(num)]
        : [parity(num)],
      digit_sum: digit_sum(num),
      fun_fact: fetchFun,
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

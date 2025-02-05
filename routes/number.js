const express = require("express");

const router = express.Router();

const numberController = require("../controllers/number");

// router.get("/", (req, res, next) => {
//   res.
// })

router.get("/api/classify-number", numberController.getNumber);

module.exports = router;

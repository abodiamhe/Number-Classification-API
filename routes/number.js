const express = require("express");

const router = express.Router();

const numberController = require("../controllers/number");

router.get("/classify-number", numberController.getNumber);

module.exports = router;

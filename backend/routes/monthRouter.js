const { getExpenditureByMonth } = require("../controllers/month.js");
const { Router } = require("express");
const router = Router();

router.get("/:month", getExpenditureByMonth);

module.exports = router;
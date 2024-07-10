const { Router } = require("express");
const { getAllExpenditures, createExpenditure, updateExpenditure, getExpenditureDetail, deleteExpenditure } = require("../controllers/userExpenditure.js");
const router = Router();

router.get("/:userId", getAllExpenditures);

router.get("/:userId/:exptId", getExpenditureDetail);

router.post("/:userId", createExpenditure);

router.put("/:userId/:exptId", updateExpenditure);

router.delete("/:userId/:exptId", deleteExpenditure);

module.exports = router;
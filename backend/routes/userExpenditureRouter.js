// protected route
const { Router } = require("express");
const { getAllExpenditures, createExpenditure, updateExpenditure, getExpenditureDetail, deleteExpenditure } = require("../controllers/userExpenditure.js");
const verifyToken = require("../middleware/verifyToken.js");
const router = Router();

// middleware
router.use(verifyToken);

// routes
router.get("/:userId", getAllExpenditures);

router.get("/:userId/:exptId", getExpenditureDetail);

router.post("/:userId", createExpenditure);

router.put("/:userId/:exptId", updateExpenditure);

router.delete("/:userId/:exptId", deleteExpenditure);

module.exports = router;
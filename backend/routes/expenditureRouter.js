const { Router } = require("express");
const { getAllExpenditures, createExpenditure, updateExpenditure, getExpenditureById, deleteExpenditure } = require("../controllers/expenditure.js");
const router = Router();

router.get("/", getAllExpenditures);

router.post("/", createExpenditure);

router.put("/:id", updateExpenditure);

router.get("/:id", getExpenditureById);

router.delete("/:id", deleteExpenditure);

// catch-all
router.all("*", (req, res) => {
    res.status(404).send("404 Invalid route");
});

module.exports = router;
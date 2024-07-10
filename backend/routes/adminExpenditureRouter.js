const { Router } = require("express");
const { getAllExpenditures, createExpenditure, updateExpenditure, getExpenditureDetail, deleteExpenditure } = require("../controllers/adminExpenditure.js");
const router = Router();

router.get("/", getAllExpenditures);

router.get("/:id", getExpenditureDetail);

router.post("/", createExpenditure);

router.put("/:id", updateExpenditure);

router.delete("/:id", deleteExpenditure);

// catch-all
router.all("*", (req, res) => {
    res.status(404).send("404 Invalid route");
});

module.exports = router;
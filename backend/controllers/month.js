const Expenditure = require("../models/expenditure.js");
const Sequelize = require("sequelize");
// const { fn, col, where } = require("sequelize");

const getExpenditureByMonth = async (req, res) => {
    try {
        // NOTE: rmb change when we figure out where to get `month` from!!
        const result = await Expenditure.findAll({
            where: Sequelize.where(Sequelize.fn("to_char", Sequelize.col("date"), "MM"), req.params.month),
            // where: where(fn("to_char", col("date"), "MM"), req.params.month),
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: `Failed to get expenditure by month ${req.params.month}`, error: err });
        console.log(err);
    };
};

module.exports = { getExpenditureByMonth };
const Expenditure = require("../models/expenditure.js");
const User = require("../models/expenditure.js");

const getAllExpenditures = async (req, res) => {
    const userId = req.params.userId; 
    try {
        const result = await Expenditure.findAll({
            where: {
                user_id: userId,
            },  
        });
        res.json(result);
    } catch (err) {
        res.json({ message: `Failed to GET expenditures for user id ${userId}`, error: err });
    };
};

const getExpenditureDetail = async (req, res) => {
    const { userId, exptId } = req.params;
    try {
        const result = await Expenditure.findAll({
            where: {
                user_id: userId,
                id: exptId,
            },
        });
        res.json(result);
    } catch (err) {
        res.json({ message: `Failed to GET expenditure id ${exptId} for user id ${userId}`, error: err });
    };
};

const createExpenditure = async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await Expenditure.create(req.body);
        res.json({ message: `Successfully created expenditure for user id ${userId}`, result });
    } catch (err) {
        res.json({ message: `Failed to CREATE expenditure for user id ${userId}`, error: err });
    };
};

const updateExpenditure = async (req, res) => {
    res.send("NOT IMPLEMENTED: updateExpenditure");
};

const deleteExpenditure = async (req, res) => {
    res.send("NOT IMPLEMENTED: deleteExpenditure");
};

module.exports = {
    getAllExpenditures,
    createExpenditure,
    getExpenditureDetail,
    updateExpenditure,
    deleteExpenditure,
};
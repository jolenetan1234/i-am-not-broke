const db = require("../models");
const Expenditure = db.expenditures;

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
    const userId = req.params.userId;
    const exptId = req.params.exptId;

    try {
        const result = await Expenditure.update(
            req.body,
            {
                where: {
                    id: exptId,
                    user_id: userId,
                },
            }
        );
        res.json({ message: `Successfully updated expenditure id ${exptId} for user id ${userId}`, result });
    } catch (err) {
        res.status(500).json({ message: `Failed to update expenditure id ${exptId} for user id ${userId}`, error: err });
    };
};

const deleteExpenditure = async (req, res) => {
    const userId = req.params.userId;
    const exptId = req.params.exptId;

    try {
        const result = await Expenditure.destroy({
            where: {
                id: exptId,
                user_id: userId,
            },
        });
        res.json({ message: `Successfully updated expenditure id ${exptId} for user id ${userId}`, result });
    } catch (err) {
        res.status(500).json({ message: `Failed to delete expenditure id ${exptId} for user id ${userId}`, error: err })
    }
};

module.exports = {
    getAllExpenditures,
    createExpenditure,
    getExpenditureDetail,
    updateExpenditure,
    deleteExpenditure,
};
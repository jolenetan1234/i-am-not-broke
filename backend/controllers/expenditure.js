const Expenditure = require("../models/expenditure.js");

const getAllExpenditures = async (req, res) => {
    try {
        const result = await Expenditure.findAll();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(err);
    };
};

const createExpenditure = async (req, res) => {
    try {
        const result = await Expenditure.create(req.body);
        res.json({ message: "Expenditure added successfully", result });
    } catch (err) {
        res.status(500).json({ message: "Failed to create expenditure", error: err });
    }
};

const getExpenditureById = async (req, res, next) => {
    try {
        const result = await Expenditure.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: `Failed to get expenditure by id ${req.params.id}` });
    };
};

const updateExpenditure = async (req, res) => {
    try {
        const result = await Expenditure.update(
            req.body,
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        res.json({ message: `Successfully updated todo id ${req.params.id}`, result })
    } catch (err) {
        res.status(500).json({ message: `Failed to update todo id ${req.params.id}`, error: err });
    }
};

const deleteExpenditure = async (req, res) => {
    try {
        const result = await Expenditure.destroy({
            where: {
                id: req.params.id
            },
        });
        res.json({ message:`Successfully deleted todo id ${req.params.id}`, result });
    } catch (err) {
        res.status(500).json({ message: `Failed to delete todo id ${req.params.id}`, error: err });
    }
};

module.exports = {
    getAllExpenditures,
    createExpenditure,
    getExpenditureById,
    updateExpenditure,
    deleteExpenditure,
};
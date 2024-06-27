// constraints here apply on ORM level

const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.js");

// sequelize -- instance of Sequelize. Configures database connection
// sequelize.define() -- creates a model (basically a table)
const Expenditure = sequelize.define("expenditure", {
    title: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    },
    amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    },
    category: {
        type: Sequelize.TEXT,
    },
});

module.exports = Expenditure;
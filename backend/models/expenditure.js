// constraints here apply on ORM level

const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.js");

// sequelize -- instance of Sequelize. Configures database connection
// sequelize.define() -- creates a model (basically a table)

// the `name` is what sequelize will use to auery the database
// eg. if we put `name` as `"Expenditure"` -> sequelize queries database for the table named "Expenditures"
const Expenditure = sequelize.define("Expenditure", {
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
        allowNull: false,
    },
    transaction_type: {
        type: Sequelize.ENUM('expenditure', 'earning'),
        allowNull: false,
    },
});

module.exports = Expenditure;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Expenditure extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Expenditure.init({
//     title: DataTypes.TEXT,
//     date: DataTypes.DATE,
//     amount: DataTypes.DECIMAL,
//     description: DataTypes.TEXT,
//     category: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Expenditure',
//   });
//   return Expenditure;
// };
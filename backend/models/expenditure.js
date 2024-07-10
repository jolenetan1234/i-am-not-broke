// constraints here apply on ORM level

const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("./user.js");

// the `name` is what sequelize will use to query the database
// eg. if we put `name` as `"Expenditure"` -> sequelize queries database for the table named "Expenditures"
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
        type: Sequelize.ENUM('dining', 'entertainment', 'shopping', 'education', 'transport', 'others', 'wages', 'passive', 'transfer', 'business'),
        defaultValue: 'others',
        allowNull: false,
    },
    transaction_type: {
        type: Sequelize.ENUM('expenditure', 'earning'),
        defaultValue: 'expenditure',
        allowNull: false,
    },

    // below is optional, as Sequelize automatically includes this when u define the association btwn `Expenditure` and `User`
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
});

// This automatically generates foreign key named 'user_id' in `Expenditure`
// Expenditure.belongsTo(User, { 
//     foreignKey: {
//         name: 'user_id',
//         allowNull: false,
//     },
//     onDelete: 'CASCADE', 
//     onUpdate: 'CASCADE', 
// });

module.exports = Expenditure;
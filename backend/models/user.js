const { Sequelize } = require("sequelize");
const sequelize = require("../config/db.js");
const Expenditure = require("./expenditure.js");

const User = sequelize.define("user", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// This automatically generates foreign key named 'user_id' in `Expenditure`
// User.hasMany(Expenditure, {
//     foreignKey: {
//         name: 'user_id',
//         allowNull: false,
//     },
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
// });

module.exports = User;
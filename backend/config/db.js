const { Sequelize } = require("sequelize");

// connect to database
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "postgres",
});

module.exports = sequelize;
'use strict';

const { Sequelize } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "transaction_type", {
      type: Sequelize.ENUM('expenditure', 'earning'),
      allowNull: true,
    });

    // populate column
    await queryInterface.sequelize.query(`
      UPDATE "Expenditures"
      SET "transaction_type" = CASE
        WHEN "amount" <= 0 THEN 'expenditure'::"enum_Expenditures_transaction_type"
        ELSE 'earning'::"enum_Expenditures_transaction_type"
      END;
    `);

    // make column non-nullable
    await queryInterface.changeColumn("Expenditures", "transaction_type", {
      type: Sequelize.ENUM('expenditure', 'earning'),
      allowNull: false,
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "transaction_type", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      "expenditures", "transaction_type", {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    );

    await queryInterface.changeColumn("expenditures", "transaction_type", {
      type: Sequelize.ENUM('expenditure', 'earning'),
      allowNull: false,
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE "expenditures"
      ALTER COLUMN "transaction_type"
      SET DEFAULT 'expenditure'::"enum_expenditures_transaction_type";
      `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE "expenditures"
      ALTER COLUMN "transaction_type"
      DROP DEFAULT;
      `);
  },
};
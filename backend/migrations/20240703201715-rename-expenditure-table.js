'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable("Expenditures", "expenditures");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable("expenditures", "Expenditures");
  },
};

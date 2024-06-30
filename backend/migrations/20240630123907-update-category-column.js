'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "category", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "category", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },
};

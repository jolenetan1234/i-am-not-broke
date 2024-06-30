'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "date", {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Expenditures", "date", {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    });
  },
};

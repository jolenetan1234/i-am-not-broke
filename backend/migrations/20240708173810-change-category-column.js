'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    const options = ['dining', 'entertainment', 'shopping', 'education', 'transport', 'others', 'wages', 'passive', 'transfer', 'business'];

    await queryInterface.changeColumn("expenditures", "category", {
      type: Sequelize.ENUM(options),
      allowNull: false,
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("expenditures", "category", {
        type: Sequelize.TEXT,
        allowNull: false,
    });
    
  },
};

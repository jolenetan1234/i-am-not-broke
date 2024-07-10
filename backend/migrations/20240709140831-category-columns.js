'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.sequelize.query(`
      ALTER TABLE "expenditures" 
      ALTER COLUMN "category" 
      SET DEFAULT 'others'::"enum_expenditures_category";`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      ALTER TABLE "expenditures"
      ALTER COLUMN "category"
      DROP DEFAULT;
      `);
  },
};

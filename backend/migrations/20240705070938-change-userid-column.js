'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    // Populate user_id with existing records
    await queryInterface.sequelize.query(`
      UPDATE "expenditures"
      SET "user_id" = (SELECT "id" FROM "users" WHERE "username" = 'test1')
      WHERE "user_id" IS NULL;
      `);
    
    // Set allowNull to false after populating
    await queryInterface.changeColumn("expenditures", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`
      UPDATE "expenditures"
      SET "user_id" = NULL
      WHERE "user_id" = (SELECT "id" FROM "users" WHERE "username" = 'test1');
      `);

    await queryInterface.changeColumn("expenditures", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },
};
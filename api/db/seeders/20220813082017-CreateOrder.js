'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        status: 'создан',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        status: 'создан',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        status: 'создан',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Orders', null, {});

  }
};

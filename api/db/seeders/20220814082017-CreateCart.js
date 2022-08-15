'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [
      {
        user_id: 1,
        device_id: 1,
        order_id: 1,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        device_id: 2,
        order_id: 1,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        device_id: 3,
        order_id: 1,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        device_id: 2,
        order_id: 1,
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Carts', null, {});

  }
};

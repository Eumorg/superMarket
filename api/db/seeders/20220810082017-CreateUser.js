'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Biba",
        password: '$2b$10$Kzsv0LAgTtT34IrDRDRjD./K08ha6ppr/rra06XFMOz9a7FZsw7dq',
        email: 'biba@biba.ru',
        phone: '911',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Devices', [
      {
        model: 'IPhone 12',
        description:
          'iPhone 13. Самая совершенная система двух камер на iPhone. Режим «Киноэффект» делает из видео настоящее кино. Супербыстрый чип A15 Bionic. Неутомимый аккумулятор. Прочный корпус. И еще более яркий дисплей Super Retina XDR.',
        price: '1000',
        type: 'phone',
        color: 'silver',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 13',
        description: '128mb',
        price: '1100',
        type: 'phone',
        color: 'black',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone X',
        description: '64mb',
        price: '900',
        type: 'phone',
        color: 'gold',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 12 mini',
        description: '256mb',
        price: '700',
        type: 'phone',
        color: 'silver',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 13 mini',
        description: '256mb',
        price: '800',
        type: 'phone',
        color: 'blue',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 11',
        description: '256mb',
        price: '1100',
        type: 'phone',
        color: 'green',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 11 pro',
        description: '256mb',
        price: '1300',
        type: 'phone',
        color: 'green',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPhone 11 pro Max',
        description: '512mb',
        price: '1500',
        type: 'phone',
        color: 'midnight',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'IPad Air',
        description: '256mb',
        price: '1000',
        type: 'tablet',
        color: 'silver',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'MacBook Air',
        description: '512mb',
        price: '1300',
        type: 'laptop',
        color: 'silver',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'MacBook Pro',
        description: '1tb',
        price: '2000',
        type: 'laptop',
        color: 'space gray',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Apple watch SE',
        description: '40mm',
        price: '500',
        type: 'watch',
        color: 'black',
        picture:
          'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-blue-select-2021.png',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Devices', null, {});

  }
};
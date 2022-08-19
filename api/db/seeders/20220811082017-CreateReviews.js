'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Reviews',
			[
				{
          user_id: null,
          username: 'Роман',
          post: 'Курьер приехал быстро! Отличный магазин!',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
          user_id: null,
          username: 'Денис',
          post: 'Купил ноутбук для адаптивной верстки. Все супер!',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
          user_id: null,
          username: 'Олег',
          post: 'А товары для лепки вы не продаете?',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
          user_id: null,
          username: 'Света',
          post: 'Зашла оставить свой отзыв. Люблю отзывы!',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        {
          user_id: null,
          username: 'Даша',
          post: 'Есть доставка в Турцию? ',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
        
	
	
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Reviews', null, {});
	},
};

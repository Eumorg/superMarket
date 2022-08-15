'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Devices',
			[
				{
					model: 'IPhone 12',
					description:
						'Это iPhone 12. Великолепный яркий дисплей Super Retina XDR 6,1 дюйма. Передняя панель Ceramic Shield, с которой риск повреждений дисплея при падении в 4 раза ниже.',
					price: '1000',
					type: 'phone',
					color: 'silver',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/47a/ruru_iphone12_q121_blue_pdp-image-1b.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/b52/ruru_iphone12_q121_blue_pdp-image-1a.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/c28/ruru_iphone12_q121_blue_pdp-image-2.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 13',
					description:
						'iPhone 13. Самая совершенная система двух камер на iPhone. Режим «Киноэффект» делает из видео настоящее кино. Супербыстрый чип A15 Bionic. Неутомимый аккумулятор.',
					price: '1100',
					type: 'phone',
					color: 'black',
					picture: 'https://items.s1.citilink.ru/1783864_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1783864_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1783864_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone X',
					description:
						'Смартфон Apple iPhone X – воплощение статуса, надежности и передовых технологий. Большой, 5.8-дюймовый экран дарит удивительно четкое и живое изображение (разрешение 2436x1125).',
					price: '900',
					type: 'phone',
					color: 'gold',
					picture:
						'https://avatars.mds.yandex.net/get-mpic/3631580/img_id5546778610980337055.png/orig',
					picture_2:
						'https://avatars.mds.yandex.net/get-mpic/200316/img_id270362589725797013.png/orig',
					picture_3:
						'https://avatars.mds.yandex.net/get-mpic/1866164/img_id1710516204641571220.png/orig',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 12 mini',
					description:
						'Это iPhone 12 mini. Мощные функции в небольшом корпусе с диагональю 5,4 дюйма. Невероятно яркий компактный дисплей Super Retina XDR.',
					price: '700',
					type: 'phone',
					color: 'silver',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/f7b/ruru_iphone12_q121_white_pdp-image-1b.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/835/ruru_iphone12_q121_white_pdp-image-1a.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/7a5/ruru_iphone12_q121_white_pdp-image-2.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 13 mini',
					description:
						'iPhone 13 mini. Самая совершенная система двух камер на iPhone. Режим «Киноэффект» делает из видео настоящее кино. Супербыстрый чип A15 Bionic. Неутомимый аккумулятор.',
					price: '800',
					type: 'phone',
					color: 'blue',
					picture: 'https://items.s1.citilink.ru/1603375_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1603375_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1603375_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 11',
					description:
						'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе черного цвета способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.',
					price: '1100',
					type: 'phone',
					color: 'green',
					picture: 'https://items.s1.citilink.ru/1793604_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1793604_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1793604_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 11 pro',
					description:
						'Смартфон Apple iPhone 11 Pro оборудован процессором A13 Bionic, самым мощным в линейке бренда на момент релиза модели. Он дает возможность проходить самые ресурсоемкие игры на максимальных настройках.',
					price: '1300',
					type: 'phone',
					color: 'green',
					picture: 'https://items.s1.citilink.ru/1178910_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1178910_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1178910_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPhone 11 pro Max',
					description:
						'Смартфон Apple iPhone 11 Pro Max в корпусе цвета «серый космос» из металла и стекла начинен самыми прогрессивными технологиями и решениями.',
					price: '1500',
					type: 'phone',
					color: 'midnight',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/f71/iphone_11_pro_sg_2.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/04c/iphone_11_pro_sg_1.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/9e6/iphone_11_pro_sg_3.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPad Air',
					description:
						'Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.',
					price: '1000',
					type: 'tablet',
					color: 'silver',
					picture: 'https://items.s1.citilink.ru/1517609_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1517609_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1517609_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'MacBook Air',
					description:
						'Нужен портативный помощник в работе и развлечениях? Ноутбук Apple MacBook Air вы сможете с собой взять даже в самолет! Он весит всего 1.29 кг, а его параметры составляют 21.2x30 см.',
					price: '1300',
					type: 'laptop',
					color: 'silver',
					picture: 'https://items.s1.citilink.ru/1451522_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1451522_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1451522_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'MacBook Pro',
					description:
						'Ноутбук Apple MacBook Pro выполнен в металлическом корпусе серого цвета толщиной 15.6 мм и весом 1.4 кг, поэтому станет стильным и надежным спутником на каждый день.',
					price: '2000',
					type: 'laptop',
					color: 'space gray',
					picture: 'https://items.s1.citilink.ru/1451570_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1451570_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1451570_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'Apple watch SE',
					description:
						'Смарт-часы Apple Watch Series 3 GPS 42mm черного цвета обладают лаконичным дизайном и расширенным функционалом, что делает удобным их использование в повседневной жизни.',
					price: '500',
					type: 'watch',
					color: 'black',
					picture: 'https://items.s1.citilink.ru/1611491_v01_b.jpg',
					picture_2: 'https://items.s1.citilink.ru/1611491_v02_b.jpg',
					picture_3: 'https://items.s1.citilink.ru/1611491_v03_b.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Devices', null, {});
	},
};

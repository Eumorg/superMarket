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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/1aa/1aa03c5eb26b29c393ca9bf250aa6d45.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/1f2/1f25b3f6c419e61ca9fdede9dfb10057.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/dd5/dd53ccd59af265466a4d1d5156c979a5.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/78c/iphone_13_q421_pink_pdp_image_position-1a__ru-ru.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/c49/iphone_13_q421_pink_pdp_image_position-1b__ru-ru.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/4b7/iphone_13_q421_pink_pdp_image_position-3__ru-ru.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/20a/20a2ca46235d24d61b36cd20a15ee6c8.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/2a4/iphone_11_b_3.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/82d/iphone_11_b_4.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/3ab/iphone_11_pro_s_2.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/cc2/iphone_11_pro_s_3.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/643/iphone_11_pro_s_1.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/55f/ruru_ipad-air_q420_space_gray-wi-fi_pdp-image-1b.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/074/ruru_ipad-air_q420_space_gray-wi-fi_pdp-image-2.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/3a3/ruru_ipad-air_q420_space_gray-wi-fi_pdp-image-6.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/f18/ruru_macbook-air_q121_silver_pdp-image-1.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/ae2/ruru_macbook-air_q121_silver_pdp-image-2.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/2a2/ruru_macbook-air_q121_silver_pdp-image-3.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/a56/macbook_pro_16-in_q122_silver_pdp_image_position-1__ru-ru.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/200/macbook_pro_16-in_q122_silver_pdp_image_position-2__ru-ru.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/a87/macbook_pro_16-in_q122_silver_pdp_image_position-3__ru-ru.jpg/resize/870x725/hq/',
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
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/8c0/apple_watch_se_gps_40mm_gold_aluminum_starlight_sport_band_34fr_screen__usen.png/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/1d3/apple_watch_se_gps_40mm_gold_aluminum_starlight_sport_band_pure_front_screen__usen.png/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/53f/ruru-apple_watch_se_gps_40mm_gold_aluminum_pink_sand_sport_band_pdp_3.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPad Pro 11',
					description:
						'Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.',
					price: '1000',
					type: 'tablet',
					color: 'silver',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/641/ruru_ipad-pro-11-wifi-silver_q321_pdp-image-1b.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/3ee/ruru_ipad-pro-11-wifi-silver_q321_pdp-image-1a.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/4fb/ruru_ipad-pro-11-wifi-silver_q321_pdp-image-2.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'Apple watch Nike SE',
					description:
						'Смарт-часы Apple Watch Series 3 GPS 42mm черного цвета обладают лаконичным дизайном и расширенным функционалом, что делает удобным их использование в повседневной жизни.',
					price: '500',
					type: 'watch',
					color: 'black',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/67e/%20apple_watch_nike_se_gps_44mm_space_gray_aluminum_anthracite_black_sport_band_34fr_screen__usen.png/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/9ec/apple_watch_nike_se_gps_40mm_space_gray_aluminum_anthracite_black_sport_band_pure_front_screen__usen%20lfwhn.png/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/a6f/ruru-apple_watch_nike_se_gps_40mm_space_gray_aluminum_anthracite_black_nike_sport_band_pdp_3.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'Apple watch Series 3',
					description:
						'Смарт-часы Apple Watch Series 3 GPS 42mm черного цвета обладают лаконичным дизайном и расширенным функционалом, что делает удобным их использование в повседневной жизни.',
					price: '500',
					type: 'watch',
					color: 'black',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/bee/ruru_apple-watch-series3-gps-aluminum-sbblack_38mm_pdp-image-1.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/fd5/ruru_apple-watch-series3-gps-aluminum-sbblack_38mm_pdp-image-2.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/bb4/ruru_apple-watch-series3-gps-aluminum-sbblack_38mm_pdp-image-3.jpg/resize/870x725/hq/',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					model: 'IPad Air mini',
					description:
						'Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.',
					price: '1000',
					type: 'tablet',
					color: 'space gray',
					picture:
						'https://cdn.svyaznoy.ru/upload/iblock/069/0698016bc3d0490e8bcefd699480022f.jpg/resize/870x725/hq/',
					picture_2:
						'https://cdn.svyaznoy.ru/upload/iblock/9a4/ipad_mini_q421_wi-fi_space_gray_pdp_image_position-1a__ru-ru.jpg/resize/870x725/hq/',
					picture_3:
						'https://cdn.svyaznoy.ru/upload/iblock/1e6/ipad_mini_q421_wi-fi_space_gray_pdp_image_position-2__ru-ru.jpg/resize/870x725/hq/',
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

import React, { useState, useEffect } from 'react';
import classes from './style.module.css';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export const PageDevice = () => {

	// Отрисовка девайсов при перезагрузки страницы
	const { id } = useParams();
	const [devices, setDevices] = useState([])

	useEffect(() => {
		async function getDevices() {
			const responce = await fetch('http://localhost:4000/catalog', {
				method: 'GET',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const res = await responce.json();
			setDevices(res[`${+id - 1}`])
		}
		getDevices()
	}, [id])

	// Остальная логика 
	const [cart, setCart] = useState(false);


	const { model, img, price, color, description } = devices;
	function comparing(arr, id) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id === id) {
				return false;
			}
		}
		return true;
	}

	function buttonCheck(id) {
		let temp = [];
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}

		for (let i = 0; i < temp.length; i++) {
			if (temp[i].id === id) {
				return false;
			}
		}

		return true;
	}

	function favCheck(id) {
		let temp = [];
		let before = localStorage.getItem('favorite');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}

		for (let i = 0; i < temp.length; i++) {
			if (temp[i].id === id) {
				return false;
			}
		}

		return true;
	}

	function addCart(e) {
		e.stopPropagation();
		const props = { id, model, img, price, color, description };

		let temp = [];
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}
		if (comparing(temp, id)) {
			temp.push(props);
		}

		localStorage.setItem(`cart`, JSON.stringify(temp));

		setCart(!cart);
	}

	function addStorage(e) {
		e.stopPropagation();
		const props = { id, model, img, price, color, description };

		let temp = [];
		let before = localStorage.getItem('favorite');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}
		if (comparing(temp, id)) {
			temp.push(props);
		}

		localStorage.setItem(`favorite`, JSON.stringify(temp));
		setCart(!cart);
	}
	return (
		<>
			<div className={classes.device__container}>
				<div className={classes.device__image__container}>
					{/* <img src={devices.picture} className={classes.device__image} alt='' /> */}
					<div className={classes.device__container__slider}>
						<Carousel>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src={devices.picture}
									alt='First slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src={devices.picture_2}
									alt='Second slide'
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className='d-block w-100'
									src={devices.picture_3}
									alt='Third slide'
								/>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
				<div className={classes.device__spec}>
					<span className={classes.font__device}>Тип товара:</span>
					<p>{devices.type}</p>
					<span className={classes.font__device}>Наименование товара:</span>
					<p className={classes.device}>{devices.model}</p>
					<span className={classes.font__device}>Цвет товара:</span>
					<p>{devices.color}</p>
					<span className={classes.font__device}>Цена товара:</span>
					<p className={classes.price__device}>{devices.price}</p>
					<span className={classes.font__device}>Описание товара</span>
					<p>{devices.description}</p>
					<button
						onClick={addStorage}
						type='button'
						className='btn btn-primary'
					>
						{favCheck(id) ? <>В избранное</> : <>В избранном</>}
					</button>
					<br />
					<button onClick={addCart} type='button' className='btn btn-primary'>
						{buttonCheck(id) ? <>В корзину</> : <>В корзине</>}
					</button>
				</div>
			</div>
		</>
	);
};

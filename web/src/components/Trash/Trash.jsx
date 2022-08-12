import classes from './style.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDeviceAction } from '../../store/actions';
import { Modal } from '../Modal/Modal';

export const Trash = () => {
	const dispatch = useDispatch();
	let storage = localStorage.getItem('cart');
	storage = JSON.parse(storage);

	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));

	useEffect(() => {
		window.addEventListener('cart', () => {
			setCart(JSON.parse(localStorage.getItem('cart')) || []);
		});
	}, []);

	const onClickDeleteDevice = (el) => {
		let storage = localStorage.getItem('cart');
		storage = JSON.parse(storage);
		storage = storage.filter((item) => item.id !== el);
		localStorage.setItem('cart', JSON.stringify(storage));
		if (storage.length === 0) {
			localStorage.removeItem('cart');
		}
	};

	const devicesPriceAll = () =>
		storage.reduce((acc, el) => {
			return (acc += +el.price);
		}, 0);

	return (
		<div>
			{storage ? (
				<>
					<h1 className={classes.trash__title}>Корзина</h1>
					<div className={classes.trash__container}>
						<table className='table'>
							<tbody>
								<tr>
									<th>№</th>
									<th>Устройство</th>
									<th>Цена</th>
								</tr>
								{storage.map((el, inx) => (
									<tr key={el.id}>
										<td>{inx + 1}</td>
										<td>{el.model}</td>
										<td>{el.price}</td>
										<td>
											<button
												className='btn btn-warning'
												onClick={() => onClickDeleteDevice(el.id)}
											>
												Удалить
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className={classes.final__price}>
						<h3>Итог:{devicesPriceAll()}</h3>
						<Modal />
					</div>
				</>
			) : (
				<h1>Нет предметов в корзине</h1>
			)}
		</div>
	);
};

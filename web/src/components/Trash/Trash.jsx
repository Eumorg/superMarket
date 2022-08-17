import { Modal } from '../Modal/Modal';
import Container from 'react-bootstrap/Container';
import { CartItem } from './CartItem/CartItem';

import style from './Trash.module.css';

export const Trash = ({ state, stateChange }) => {
	let storage = localStorage.getItem('cart');

	storage = JSON.parse(storage);

	const devicesPriceAll = () =>
		storage.reduce((acc, el) => {
			return (acc += +el.price * el.count);
		}, 0);

	return (
		<Container>
			<div>
				<h1 className={style.trash__title}>Корзина</h1>
				<div className={style.trash__container}>
					{!storage || storage.length === 0 ? (
						<div>Нет предметов в корзине</div>
					) : (
						<>
							{storage.map((el, inx) => (
								<div key={inx + 1}>
									<CartItem
										id={el.id}
										model={el.model}
										price={el.price}
										state={state}
										stateChange={stateChange}
										inx={inx}
										count={el.count}
									/>
								</div>
							))}
						</>
					)}
				</div>
				<div>
					<div>
						<h3 className={style.trash__title}>
							{' '}
							{!storage || storage.length ? (
								<>Итого: {devicesPriceAll()}</>
							) : (
								<></>
							)}
						</h3>
					</div>
					<Modal />
				</div>
			</div>
		</Container>
	);
};

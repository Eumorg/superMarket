import classes from './style.module.css';
import { Modal } from '../Modal/Modal';

export const Trash = ({ state, stateChange }) => {
	let storage = localStorage.getItem('cart');

	storage = JSON.parse(storage);

	function deleteItem(id) {
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		const after = before.filter((el) => el.id !== id);

		localStorage.setItem(`cart`, JSON.stringify(after));

		stateChange(!state);
	}
	const devicesPriceAll = () =>
		storage.reduce((acc, el) => {
			return (acc += +el.price);
		}, 0);

	return (
		<div className={classes.trash__container}>
			<h1>Корзина</h1>
			<table className={classes.table__container}>
				<tbody>
					<tr>
						<th>№</th>
						<th>Устройство</th>
						<th>Цена</th>
					</tr>

					{!storage || storage.length === 0 ? (
						<>
							<tr>
								<td>Нет предметов в корзине</td>
							</tr>
						</>
					) : (
						<>
							{storage.map((el, inx) => (
								<tr key={el.id}>
									<td>{inx + 1}</td>
									<td>{el.model}</td>
									<td>{el.price}</td>
									<td>
										<button onClick={() => deleteItem(el.id)}>Удалить</button>
									</td>
								</tr>
							))}
						</>
					)}
				</tbody>
			</table>
			<div className={classes.final__price}>
			<div><h3> {!storage || storage.length? (<>Итого: { devicesPriceAll()}</>) : (<></>)}</h3></div>
				<Modal />
			</div>
		</div>
	);
};

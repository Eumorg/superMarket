import classes from './style.module.css';
import { useSelector } from 'react-redux';

export const Trash = () => {
	const devices = useSelector((store) => store.devices);
	const devicesPriceAll = devices.reduce((acc, el) => {
		return (acc += +el.price);
	}, 0);

	console.log(devicesPriceAll);
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
					{devices.map((el, inx) => (
						<tr key={el.id}>
							<td>{inx + 1}</td>
							<td>{el.model}</td>
							<td>{el.price}</td>
							<td>
								<button className={classes.rm}>&times;</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<h3>Итог:{devicesPriceAll}</h3>
			<button type='button' className='btn btn-success'>
				Оформить заказ
			</button>
		</div>
	);
};

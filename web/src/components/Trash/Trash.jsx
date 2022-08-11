import classes from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDeviceAction } from '../../store/actions';

export const Trash = () => {
	const devices = useSelector((store) => store.devices);
	const dispatch = useDispatch();
	const onClickDeleteDevice = (id) => {
		dispatch(deleteDeviceAction(id));
	};
	const devicesPriceAll = () =>
		devices.reduce((acc, el) => {
			return (acc += +el.price);
		}, 0);
	return (
		<div>
			<h1 className={classes.trash__title}>Корзина</h1>
			<div className={classes.trash__container}>
				<table className='table'>
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
				<button type='button' className='btn btn-success'>
					Оформить заказ
				</button>
			</div>
		</div>
	);
};

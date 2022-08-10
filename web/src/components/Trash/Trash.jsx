import classes from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDeviceAction } from '../../store/actions';

export const Trash = () => {
	const devices = useSelector((store) => store.devices);
	const dispatch = useDispatch();
	const onClickDeleteDevice = (id) => {
		dispatch(deleteDeviceAction(id));
	};
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
								<button onClick={() => onClickDeleteDevice(el.id)}>
									Удалить
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* <h3>Итог:{devicesPriceAll}</h3> */}
			<button type='button' className='btn btn-success'>
				Оформить заказ
			</button>
		</div>
	);
};

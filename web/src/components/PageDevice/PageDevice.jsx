import React, { useState } from 'react';
import classes from './style.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const PageDevice = () => {
	const { id } = useParams();
	const [value, setValue] = useState(false);
	const devices = useSelector((store) => store.devices[`${+id - 1}`]);

	return (
		<div className={classes.device__container}>
			<div className={classes.device__image__container}>
				<img src={devices.picture} className={classes.device__image} />
				<button type='button' className='btn btn-success'>
					Добавить в корзину
				</button>
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
				<button
					className='btn btn-primary'
					onClick={() => setValue((el) => !el)}
				>
					Показать описание
				</button>

				{value && (
					<div>
						<p className={classes.description__device}>{devices.description}</p>
					</div>
				)}
			</div>
		</div>
	);
};

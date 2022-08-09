import React, { useState } from 'react';
import classes from './style.module.css';

export const PageDevice = ({ product }) => {
	const [value, setValue] = useState(false);
	return (
		<div className={classes.device__container}>
			<img src={product.image} className={classes.device__image} />
			<div className={classes.device__spec}>
				<p>Наименование товара:{product.title}</p>
				<p>Цена товара:{product.price}</p>
				<button onClick={() => setValue((el) => !el)}>
					Показать характеристики
				</button>

				{value && (
					<div>
						<p>{product.description}</p>
					</div>
				)}
			</div>
		</div>
	);
};

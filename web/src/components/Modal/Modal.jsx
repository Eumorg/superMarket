import React from 'react';
import classes from './style.module.css';
import { useNavigate } from 'react-router-dom';

export function Modal() {
	const navigate = useNavigate();
	function onClickHandler() {
		navigate(`/profile`);
	}
	return (
		<>
			<a href='#win1' className='btn btn-success'>
				Оформить заказ
			</a>
			<a href='#x' className={classes.overlay} id='win1'></a>
			<div className={classes.popup}>
				<h1>
					Ваш заказ оформлен,в ближайшее время с вами свяжется наш сотрудник.
				</h1>
				<button
					onClick={() => onClickHandler()}
					type='button'
					className='btn btn-success'
				>
					Перейти в личный кабинет
				</button>
				<a className={classes.close} title='Закрыть' href='#close'></a>
			</div>
		</>
	);
}

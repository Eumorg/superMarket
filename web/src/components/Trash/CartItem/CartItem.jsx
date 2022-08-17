import style from './CartItem.module.css';

export function CartItem({ id, model, price, inx, state, stateChange, count }) {
	function deleteItem(id) {
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		const after = before.filter((el) => el.id !== id);

		localStorage.setItem(`cart`, JSON.stringify(after));

		stateChange(!state);
	}

	function countDecrease() {
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (count > 1) {
			const after = before.map((el) => {
				if (el.id === id) {
					el.count--;
				}
				return el;
			});
			localStorage.setItem(`cart`, JSON.stringify(after));
		}

		stateChange(!state);
	}

	function countIncrease() {
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (count < 5) {
			const after = before.map((el) => {
				if (el.id === id) {
					el.count++;
				}
				return el;
			});
			localStorage.setItem(`cart`, JSON.stringify(after));
		}

		stateChange(!state);
	}

	return (
		<div className={style.container}>
			<div className={style.dev__num}>
				<strong>№</strong>
				{inx + 1}
			</div>
			<div className={style.dev__model}>
				<strong>Устройство</strong>
				{model}
			</div>
			<div className={style.dev__price}>
				<strong>Цена</strong>
				{price}
			</div>
			<div>
				<strong>Количество</strong>
				<div className={style.dev__count}>
					<button className={style.dev__dic} onClick={countDecrease}>
						{' '}
						-{' '}
					</button>
					<div> {count} </div>
					<button className={style.dev__inc} onClick={countIncrease}>
						{' '}
						+{' '}
					</button>
				</div>
			</div>
			<div>
				<br />
				<div className={style.dev__del}>
					<button className={style.dev__del} onClick={() => deleteItem(id)}>
						Удалить
					</button>
				</div>
			</div>
		</div>
	);
}

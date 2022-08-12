import React, { useState } from "react";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const PageDevice = () => {
  const { id } = useParams();

  const [cart, setCart] = useState(false);

  const devices = useSelector((store) => store.devices[`${+id - 1}`]);

  const{  model, img, price, color, description } = { devices.model, devices.img, devices.price, devices.color, devices.description}

  function onClickHandler(id) {
		navigate(`device/${id}`);
	}

	function comparing(arr, id) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id === id) {
				return false;
			}
		}

		return true;
	}

	function buttonCheck(id) {
		let temp = [];
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}

		for (let i = 0; i < temp.length; i++) {
			if (temp[i].id === id) {
				return false;
			}
		}

		return true;
	}

	function favCheck(id) {
		let temp = [];
		let before = localStorage.getItem('favorite');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}

		for (let i = 0; i < temp.length; i++) {
			if (temp[i].id === id) {
				return false;
			}
		}

		return true;
	}

	function addCart(e) {
		e.stopPropagation();
		const props = { id, model, img, price, color, description };

		let temp = [];
		let before = localStorage.getItem('cart');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}
		if (comparing(temp, id)) {
			temp.push(props);
		}

		localStorage.setItem(`cart`, JSON.stringify(temp));

		setCart(!cart);
	}

	function addStorage(e) {
		e.stopPropagation();
		const props = { id, model, img, price, color, description };

		let temp = [];
		let before = localStorage.getItem('favorite');

		before = JSON.parse(before);

		if (before) {
			temp = temp.concat(before);
		}
		if (comparing(temp, id)) {
			temp.push(props);
		}

		localStorage.setItem(`favorite`, JSON.stringify(temp));
		setCart(!cart);
	}

  return (
    <div className={classes.device__container}>
      <div className={classes.device__image__container}>
        <img src={devices.picture} className={classes.device__image} alt=''/>
        <button onClick={addCart} type="button" className="btn btn-primary">
        {buttonCheck(id) ? <>В корзину</> : <>В корзине</>}
        </button>
        <button onClick={addStorage} type="button" className="btn btn-primary">
        {favCheck(id) ? <>В избранное</> : <>В избранном</>}
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
        <span className={classes.font__device}>Описание товара</span>
        <p>{devices.description}</p>
      </div>
    </div>
  );
};

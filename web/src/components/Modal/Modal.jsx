import React from "react";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Modal() {
  const navigate = useNavigate();
  function onClickHandler() {
    navigate(`/profile`);
  }

  let storage = localStorage.getItem("cart");

  storage = JSON.parse(storage);

  const user = useSelector((store) => store.inputState);

  async function createOrder() {
    const response = await fetch("http://localhost:4000/orders/getUserId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user.payload,
      }),
    });

    const data = await response.json();
    const UserId = data.id;

    await fetch("http://localhost:4000/orders/setOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: UserId,
        devices: storage,
      }),
    });
  }

  return (
    <>
      <a href="#win1" className="btn btn-success" onClick={createOrder}>
        Оформить заказ
      </a>
      <a href="#x" className={classes.overlay} id="win1">
        {" "}
      </a>
      <div className={classes.popup}>
        <h1>
          Ваш заказ оформлен,в ближайшее время с вами свяжется наш сотрудник.
        </h1>
        <button
          onClick={() => onClickHandler()}
          type="button"
          className="btn btn-success"
        >
          Перейти в личный кабинет
        </button>
        <a className={classes.close} title="Закрыть" href="#close">
          {" "}
        </a>
      </div>
    </>
  );
}

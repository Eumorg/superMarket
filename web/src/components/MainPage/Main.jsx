import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import DeviceItem from "../DeviceItem/DeviceItem";
import { useNavigate } from "react-router-dom";

import style from "./Main.module.css";

function Main() {
  const navigate = useNavigate();
  const devices = useSelector((store) => store.devices);

  function onClickHandler(id) {
    navigate(`device/${id}`);
  }

  function categorySelector(type) {
    navigate(`${type}`);
  }

  return (
    <div >

      <div className={style.container}>
        <h1 className={style.header}>Категории</h1>
        <div >
          <div className={style.categories}>
            <div className={style.category} onClick={() => { categorySelector('laptops') }}>
              <img
                className={style.picture}
                src="pictures/MacBook_Pro_14.jpg"
                alt=""
              />
              <h3>Ноутбуки</h3>
            </div>
            <div className={style.category} onClick={() => { categorySelector('tablets') }}>
              <img
                className={style.picture}
                src="pictures/ipad.jpg"
                alt="" />
              <h3>Планшеты</h3>
            </div>
            <div className={style.category} onClick={() => { categorySelector('phones') }}>
              <img
                className={style.picture}
                src="pictures/iphone.jpg"
                alt="" />
              <h3>Смартфоны</h3>
            </div>
            <div className={style.category} onClick={() => { categorySelector('accesories') }}>
              <img
                className={style.picture}
                src="pictures/iacc.jpg"
                alt="" />
              <h3>Аксессуары</h3>
            </div>
          </div>

          <h1 className={style.header}>Новинки</h1>
          <div className={style.list}>

            {devices.map((device) => (
              <div
                key={device.id}
                className={style.card}
                onClick={() => onClickHandler(device.id)}
              >
                <DeviceItem
                  model={device.model}
                  img={device.picture}
                  price={device.price}
                  color={device.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

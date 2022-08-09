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

  return (
    <div>
      <Header />
      <div>
        <h1 className={style.header}>Категории</h1>
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
  );
}

export default Main;

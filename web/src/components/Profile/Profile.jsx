import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import Button from "react-bootstrap/Button";

import { useSelector } from "react-redux";
import style from "./Profile.module.css";

import FavoriteItem from "../FavoriteItem/FavoriteItem";

function Profile({ state, stateChange }) {
  const user = useSelector((store) => store.inputState);

  let storage = localStorage.getItem("favorite");

  storage = JSON.parse(storage);

  return (
    <div className={style.global}>
      <div className={style.header}>
        <div>
          <h3>Hello, {user.payload}!</h3>
        </div>
        <div>
          <Button variant="primary">Изменить личную информацию</Button>
        </div>
      </div>

      <div>
        <div>
          <h3>Ваши заказы</h3>
        </div>
        <div className={style.orderList}>
          <OrderItem />
          <OrderItem  />
        </div>
      </div>
      <div>
        <h3>Избранное</h3>
      </div>
      <div>
        {!storage || storage.length === 0 ? (
          <>
            <div>Нет предметов в избранном</div>
          </>
        ) : (
          <>
            <div className={style.fav}>
              {storage.map((el) => (
                <div key={el.id} className={style.card}>
                  <FavoriteItem
                    id={el.id}
                    model={el.model}
                    img={el.img}
                    price={el.price}
                    color={el.color}
                    description={el.description}
                    state={state}
                    stateChange={stateChange}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import OrderItem from "../OrderItem/OrderItem";

import { useSelector } from "react-redux";
import style from "./Profile.module.css";

import FavoriteItem from "../FavoriteItem/FavoriteItem";

function Profile() {
  const user = useSelector((store) => store.inputState);

  let storage = localStorage.getItem("favorite");

  storage = JSON.parse(storage);

  return (
    <div className={style.global}>
      <div>Hello {user.payload}</div>

      <div>
        <div>Ваши заказы</div>
        <div>
          <OrderItem />
        </div>
      </div>
      <div>Избранное</div>
      <div>
        {storage ? (
          <>
            {storage.map((el) => (
              <div key={el.id} className={el.card}>
                <FavoriteItem
                  id={el.id}
                  model={el.model}
                  img={el.picture}
                  price={el.price}
                  color={el.color}
                  description={el.description}
                />
              </div>
            ))}
          </>
        ) : (
          
          <><div>Нет предметов в избранном</div></>
        )}
      </div>
      <div>Изменить личную информацию</div>
    </div>
  );
}

export default Profile;

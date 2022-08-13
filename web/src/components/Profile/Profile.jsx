import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import Button from "react-bootstrap/Button";

import { useSelector } from "react-redux";
import style from "./Profile.module.css";

import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useState } from "react";

export default function Profile({ state, stateChange }) {
  const user = useSelector((store) => store.inputState);

  const [orders, setOrders] = useState([]);

  console.log(orders);

  const getData = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/orders", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setOrders(data);
  };

  let storage = localStorage.getItem("favorite");

  storage = JSON.parse(storage);

  return (
    <div className={style.global}>
      <div className={style.header}>
        <div>
          <h3>Hello, {user.payload}!</h3>
        </div>
        <div>
          <Button  variant="primary">
            Изменить личную информацию
          </Button>
          <Button onClick={getData} variant="primary">Заказы</Button>
        </div>
      </div>

      <div>
        <div>
          <h3>Ваши заказы</h3>
        </div>
        <div className={style.orderList}>

         {(orders.length)? (<>  <OrderItem 
          id={orders[0].id}
          user={orders[0]['User.name']}
          status={orders[0].status}

          
           />
         </>) : (<></>)}
        
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

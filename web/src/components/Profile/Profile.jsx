import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import OrderItem from "../OrderItem/OrderItem";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import style from "./Profile.module.css";

export default function Profile({ state, stateChange }) {
  const user = useSelector((store) => store.inputState);

  const [orders, setOrders] = useState([]);

  function getList() {
    let list = orders.filter((el) => el["User.name"] === user.payload);

    // let list = orders;

    let arr = [];

    for (let i = 0; i < list.length; i++) {
      let obj = {
        id: list[i].id,
        status: list[i].status,
        user: list[i]["User.name"],
        created: list[i].createdAt.slice(0, 10),
        updated: list[i].updatedAt.slice(0, 10),
        device: [
          {
            name: list[i]["Carts.Device.model"],
            id: list[i]["Carts.device_id"],
          },
        ],
      };

      arr.push(obj);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].id === arr[j].id) {
          arr[i].device = arr[i].device.concat(arr[j].device);
          arr[j].device = arr[i].device;
        }
      }
    }

    let uniqueObjArray = [
      ...new Map(arr.map((item) => [item["id"], item])).values(),
    ];

    return uniqueObjArray;
  }

  let list = getList();

  async function getData(event) {
    // event.preventDefault();

    const response = await fetch("http://localhost:4000/orders", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setOrders(data);
  }

  useEffect(() => {
    getData();
  }, []);

  let storage = localStorage.getItem("favorite");

  storage = JSON.parse(storage);

  return (
    <div className={style.global}>
      <div className={style.header}>
        <div>
          <h3>Hello, {user.payload}!</h3>
        </div>
        {/* <div>
          <Button variant="primary">Изменить личную информацию</Button>
         
        </div> */}
      </div>

      <div>
        <div>
          <h3>Ваши заказы</h3>
        </div>
        <div className={style.orderList}>
          {orders.length ? (
            <>
              {list.map((el, inx) => (
                <div key={inx + 1}>
                  <OrderItem
                    id={el.id}
                    itemList={el.device}
                    user={el.user}
                    status={el.status}
                    created={el.created}
                    updated={el.updated}
                  />
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
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
              {storage.map((el, inx) => (
                <div key={inx + 1} className={style.card}>
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

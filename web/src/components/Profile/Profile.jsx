import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import OrderItem from "../OrderItem/OrderItem";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import style from "./Profile.module.css";

export default function Profile({ state, stateChange }) {
  const user = useSelector((store) => store.inputState);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData(event) {
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

  function getList() {
    let list = orders.filter((el) => el["User.name"] === user.payload);
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
            count: list[i]["Carts.count"],
          },
        ],
      };
      arr.push(obj);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].id === arr[j].id) {
          arr[i].device = arr[i].device.concat(arr[j].device);
          arr[i].device = arr[i].device.reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc;
            }
            return [...acc, item];
          }, []);
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

  let storage = localStorage.getItem("favorite");

  storage = JSON.parse(storage);

  const ordersHandler = async (event) => {
    event.preventDefault();
    let lists = [];
    lists.push({ id: event.target.id });
    const response = await fetch("http://localhost:4000/orders/win", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lists),
    });
    if (response.status === 200) {
      getData();
    }
    // .then((response)=>response.json())
    // .then((data)=>setOrders(data))
  };

  return (
    <div className={style.global}>
      <div className={style.header}>
        <div>
          <h3>Привет, {user.payload}!</h3>
        </div>
      </div>

      <div>
        <div className={style.title}>
          <h3>Ваши заказы</h3>
        </div>
        <div className={style.orderList}>
          {orders.length ? (
            <><ListGroup as="ol">
              { 
              list.map((el, inx) => (
                <div key={inx + 1} className={style.orderItem}>
                  <OrderItem
                    as="li"
                    id={el.id}
                    itemList={el.device}
                    user={el.user}
                    status={el.status}
                    created={el.created}
                    updated={el.updated}
                    ordersHandler={ordersHandler}
                    state={state}
                    stateChange={stateChange}
                  />
                </div>
                
              )) }
            </ListGroup></>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={style.title}>
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
                    count={1}
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

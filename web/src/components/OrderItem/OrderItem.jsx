import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";

import { Link } from "react-router-dom";

import style from "./OrderItem.module.css";

function OrderItem({ id, status, itemList, created, updated, ordersHandler }) {
  return (
    <form onSubmit={ordersHandler} id={id} className={style.block}>
      <div className={style.num}>
        <div>#{id}</div>
      </div>

      <div className={style.col}>
        <div className={style.header}>Содержимое</div>
        {itemList.map((el, index) => (
          <span key={index + 1} className={style.device}>
            <Link className={style.link} to={`/device/${el.id}`}>
              {el.name}{" "}
            </Link>
          </span>
        ))}
      </div>

      <div className={style.count}>
        <div className="">
          <div className={style.header}>Количество</div>
          {itemList.map((el, index) => (
            <div key={index + 1} >
              <div className={style.qty}>{el.count}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.date}>
        <div className={style.header}>Создан </div>
        <div className={style.status}>{created}</div>
      </div>
      <div className={style.date}>
        <div className={style.header}>Обновлен </div>
        <div className={style.status}>{updated}</div>
      </div>
      <div>
        <div className={style.header}>Статус</div>
        <div className={style.status}>
          <Badge bg="primary" pill>
            {status}
          </Badge>
        </div>
      </div>
      <div className={style.button}>
        <Button
          type="submit"
          variant={status !== "Выполнен" ? "primary" : "secondary"}
        >
          <div>{status !== "Выполнен" ? "Получить" : "Получен"}</div>
        </Button>
      </div>
    </form>
  );
}

export default OrderItem;

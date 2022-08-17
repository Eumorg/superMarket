import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import style from "./OrderItem.module.css";

function OrderItem({ id, status, itemList, created, updated, ordersHandler }) {
  return (
    <ListGroup.Item as="li">
      <form onSubmit={ordersHandler} id={id} className={style.block}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">#{id}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">
            Содержимое:
            {itemList.map((el, index) => (
              <div key={index + 1} className={style}>
                <Link to={`/device/${el.id}`}>{el.name} </Link>
                <div>Колличество: {el.count}</div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="ms-2 me-auto">
          <div className=""></div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Создан: {created}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Обновлен: {updated}</div>
        </div>

        <Badge bg="primary" pill>
          {status}
        </Badge>
        <Button type="submit" variant="primary">
          Заказ получен
        </Button>
      </form>
    </ListGroup.Item>
  );
}

export default OrderItem;

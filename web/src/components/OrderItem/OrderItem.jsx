import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

// import style from "./OrderItem.module.css";

function OrderItem({ id, user, status, itemList, created, updated, ordersHandler }) {

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <form onSubmit={ordersHandler} id={id}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">#{id}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">
            Содержимое:
            {itemList.map((el, index) => (
              <div key={index + 1} >
                <Link to={`/device/${el.id}`}>{el.name} </Link>
                <div>Колличество: 1</div>
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
        <Button type="submit" variant="primary">Заказ получен</Button>
      
        </form>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default OrderItem;

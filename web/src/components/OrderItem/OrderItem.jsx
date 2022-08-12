import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

// import style from "./OrderItem.module.css";

function OrderItem() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">#001</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Iphone 12</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Создан: 05-05-2022</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Обновлен: 07-05-2022</div>
        </div>

        <Badge bg="primary" pill>
          Оплачен
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default OrderItem;

import React from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

// import style from "./OrderItem.module.css";

function OrderItem({id, user, status}) {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">№{id}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="fw-bold">Имя: {user}</div>
        </div>
        <div className="ms-2 me-auto">
          <div className=""></div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Создан:</div>
        </div>
        <div className="ms-2 me-auto">
          <div className="">Обновлен: </div>
        </div>

        <Badge bg="primary" pill>
          {status}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default OrderItem;

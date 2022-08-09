import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header/Header";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import style from "./Main.module.css";

function Main() {
  const devices = useSelector((store) => store.devices);
  console.log(devices.devices);

  return (
    <div>
      <Header />
      <div>
        <h1 className={style.header}>Категории</h1>
        <h1 className={style.header}>Новинки</h1>
        <div className={style.list}>
          {devices.map((device) => (
            <div key={device.id} className={style.card}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={device.picture} />
                <Card.Body>
                  <Card.Title>{device.model}</Card.Title>
                  <Card.Text>{device.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Цвет: {device.color}</ListGroup.Item>
                  <ListGroup.Item>Цена: {device.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">В избраное </Card.Link>
                  <Card.Link href="#">Купить</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;

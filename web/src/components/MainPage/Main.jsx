import React from "react";
import { useSelector } from "react-redux";
import DeviceItem from "../DeviceItem/DeviceItem";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from "./Main.module.css";
import { Slides } from "../Slides/Slides";


function Main() {
  const navigate = useNavigate();
  const devices = useSelector((store) => store.searchDevices);

  function categorySelector(type) {
    navigate(`${type}`);
  }

  const filterModel = devices.filter(model => {
    return model.model
  })

  return (
    <Container>
      <div className={style.container}>
        <h1 className={style.header}>Категории</h1>
        <div>
          <div className={style.categories}>
            <div
              className={style.category}
              onClick={() => {
                categorySelector("laptops");
              }}
            >
              <img
                className={style.picture}
                src="pictures/MacBook_Pro_14.jpg"
                alt=""
              />
              <h3>Ноутбуки</h3>
            </div>
            <div
              className={style.category}
              onClick={() => {
                categorySelector("tablets");
              }}
            >
              <img className={style.picture} src="pictures/ipad.jpg" alt="" />
              <h3>Планшеты</h3>
            </div>
            <div
              className={style.category}
              onClick={() => {
                categorySelector("phones");
              }}
            >
              <img className={style.picture} src="pictures/iphone.jpg" alt="" />
              <h3>Смартфоны</h3>
            </div>
            <div
              className={style.category}
              onClick={() => {
                categorySelector("accesories");
              }}
            >
              <img className={style.picture} src="pictures/iacc.jpg" alt="" />
              <h3>Аксессуары</h3>
            </div>
          </div>
          <Slides />
          <h1 className={style.header}>Новинки</h1>
          <div className={style.list}>
            <Row>
              {filterModel.slice(-4).reverse().map((device) => (
                <Col key={device.id} className={style.card}>
                  <DeviceItem
                    id={device.id}
                    model={device.model}
                    img={device.picture}
                    price={device.price}
                    color={device.color}
                    description={device.description}
                    count={1}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;

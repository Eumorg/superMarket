import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./DeviceItem.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DeviceItem({ id, model, img, price, color, description, count }) {
  const [cart, setCart] = useState(false);

  const navigate = useNavigate();

  function onClickHandler(id) {
    navigate(`/device/${id}`);
  }

  function comparing(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return false;
      }
    }

    return true;
  }

  function buttonCheck(id) {
    let temp = [];
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    if (before) {
      temp = temp.concat(before);
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        return false;
      }
    }

    return true;
  }

  function favCheck(id) {
    let temp = [];
    let before = localStorage.getItem("favorite");

    before = JSON.parse(before);

    if (before) {
      temp = temp.concat(before);
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        return false;
      }
    }

    return true;
  }

  function addCart(e) {
    e.stopPropagation();
    const props = { id, model, img, price, color, description, count };

    let temp = [];
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    if (before) {
      temp = temp.concat(before);
    }
    if (comparing(temp, id)) {
      temp.push(props);
    }

    localStorage.setItem(`cart`, JSON.stringify(temp));

    setCart(!cart);
  }

  function addStorage(e) {
    e.stopPropagation();
    const props = { id, model, img, price, color, description };

    let temp = [];
    let before = localStorage.getItem("favorite");

    before = JSON.parse(before);

    if (before) {
      temp = temp.concat(before);
    }
    if (comparing(temp, id)) {
      temp.push(props);
    }

    localStorage.setItem(`favorite`, JSON.stringify(temp));
    setCart(!cart);
  }

  return (
    <>
      <Card className={style.card} onClick={() => onClickHandler(id)}>
        <div className={style.img__window}>
          <Card.Img
            className={style.img__window__container}
            variant="top"
            src={img}
          />
        </div>
        <Card.Body>
          <div className={style.description}>
            <Card.Title className={style.title}>{model}</Card.Title>
            <Card.Text className={style.color}>
              <span>{`${color}`}</span>
            </Card.Text>
             <Card.Text className={style.price}>
              <span>{`$${price}`}</span>
            </Card.Text>
          </div>
          <div className={style.buttons}>
            <Button
              onClick={addCart}
              variant={buttonCheck(id)? 'primary' : 'outline-primary'}
              className={style.button}
            >
              {buttonCheck(id) ? <>В корзину</> : <>В корзине</>}
            </Button>
            <Button
              className={style.button}
              variant={favCheck(id)? 'primary' : 'outline-primary'}
              onClick={addStorage}
            >
              {favCheck(id) ? <>В избранное</> : <>В избранном</>}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default DeviceItem;

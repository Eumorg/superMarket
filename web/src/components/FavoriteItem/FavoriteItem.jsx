import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./FavoriteItem.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FavoriteItem({
  id,
  model,
  img,
  price,
  color,
  description,
  state,
  stateChange,
}) {
  const [cart, setCart] = useState(false);

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

  function onClickHandler(id) {
    navigate(`/device/${id}`);
  }

  const navigate = useNavigate();

  function comparing(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return false;
      }
    }
    return true;
  }

  function addCart(e) {
    e.stopPropagation();

    let count = 1;
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

  function deleteItem(e) {
    e.stopPropagation();
    let before = localStorage.getItem("favorite");

    before = JSON.parse(before);

    const after = before.filter((el) => el.id !== id);

    localStorage.setItem(`favorite`, JSON.stringify(after));

    navigate(`/profile`);

    stateChange(!state);
  }

  return (
    <Card onClick={() => onClickHandler(id)} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} className={style.img} />
      <Card.Body>
        <div className={style.description}>
          <Card.Title className={style.title}>{model}</Card.Title>
          <Card.Text className={style.color}>
            <span>{color}</span>
          </Card.Text>
          <Card.Text className={style.price}>
            <span>{`$${price}`}</span>
          </Card.Text>
        </div>
        <div className={style.buttons}>
          <Button onClick={addCart} variant="primary">
            {buttonCheck(id) ? <>В корзину</> : <>В корзине</>}
          </Button>
          <Button
            onClick={deleteItem}
            className={style.button}
            variant="danger"
          >
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FavoriteItem;

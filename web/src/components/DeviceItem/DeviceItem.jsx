import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./DeviceItem.module.css";
import { useNavigate } from "react-router-dom";

function DeviceItem({ id, model, img, price, color, description }) {
  const navigate = useNavigate();

  function onClickHandler(id) {
    navigate(`device/${id}`);
  }

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
    const props = { id, model, img, price, color, description };

    let temp = [];
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    if (before) {
      temp = temp.concat(before);
    }
    if (comparing(temp, id)) {
      temp.push(props);
    }

    console.log('cart',temp);
    localStorage.setItem(`cart`, JSON.stringify(temp));
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

    console.log('fav', temp);
    localStorage.setItem(`favorite`, JSON.stringify(temp));
  }

  return (
    <Card style={{ width: "18rem" }} onClick={() => onClickHandler(id)}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Text>
          <span>{`ЦЕНА: ${price}`}</span>
        </Card.Text>
        <Card.Text>
          <span>{`ОПИСАНИЕ: ${description}`}</span>
        </Card.Text>
        <Card.Text>
          <span>{`ЦВЕТ: ${color}`}</span>
        </Card.Text>
        <Button onClick={addCart} variant="primary">В корзину</Button>
        <Button className={style.button} variant="primary" onClick={addStorage}>
          В избранное
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DeviceItem;

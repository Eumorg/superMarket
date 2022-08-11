import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./FavoriteItem.module.css";

function FavoriteItem({ id, model, img, price, color, description }) {
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

    console.log("cart", temp);
  }

  function deleteItem() {
    let before = localStorage.getItem("favorite");

    before = JSON.parse(before);

    const after = before.filter((el) => el.id !== id);

    localStorage.setItem(`favorite`, JSON.stringify(after));
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Text>
          <span>{`ЦЕНА: ${price}`}</span>
        </Card.Text>
        <Card.Text>
          <span>{`ЦВЕТ: ${color}`}</span>
        </Card.Text>
        <Button onClick={addCart} variant="primary">
          В корзину
        </Button>
        <Button onClick={deleteItem} className={style.button} variant="danger">
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FavoriteItem;

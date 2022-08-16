
import style from "./CartItem.module.css";

export function CartItem({ id, model, price, inx, state, stateChange, count }) {
 

  function deleteItem(id) {
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    const after = before.filter((el) => el.id !== id);

    localStorage.setItem(`cart`, JSON.stringify(after));

    stateChange(!state);
  }

  function countDecrease() {
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    if (count > 1) {
      const after = before.map((el) => {
        if (el.id === id) {
          
          el.count--
        }
        return el;
      });
      localStorage.setItem(`cart`, JSON.stringify(after));
    }

    stateChange(!state);
  }

  function countIncrease() {
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    if (count < 5) {
      const after = before.map((el) => {
        if (el.id === id) {
          
          el.count++
        }
        return el;
      });
      localStorage.setItem(`cart`, JSON.stringify(after));
    }

    stateChange(!state);

  }

  return (
    <div className={style.container}>
      <div>{inx + 1}</div>
      <div>{model}</div>
      <div>${price}</div>
      <div className={style.container}>
        <button onClick={countDecrease}> - </button>
        <div> {count} </div>
        <button onClick={countIncrease}> + </button>
      </div>
      <div>
        <button onClick={() => deleteItem(id)}>Удалить</button>
      </div>
    </div>
  );
}

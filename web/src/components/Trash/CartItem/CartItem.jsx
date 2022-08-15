import { useState } from "react";
import style from "./CartItem.module.css";

export function CartItem({ id, model, price, inx, state, stateChange }) {
  let [count, setCount] = useState(1);

  function deleteItem(id) {
    let before = localStorage.getItem("cart");

    before = JSON.parse(before);

    const after = before.filter((el) => el.id !== id);

    localStorage.setItem(`cart`, JSON.stringify(after));

    stateChange(!state);
  }

  function countDecrease(){
    if(count > 1){
      setCount(count - 1)
    }
    
  }

  function countIncrease(){
    if(count < 5){
      setCount(count + 1)
    }
    
  }

  return (
    <div className={style.container}>
      <div>{inx + 1}</div>
      <div>{model}</div>
      <div>{price}</div>
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

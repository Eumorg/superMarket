import { Modal } from "../Modal/Modal";

import { CartItem } from "./CartItem/CartItem";

import style from "./Trash.module.css";

export const Trash = ({ state, stateChange }) => {
  let storage = localStorage.getItem("cart");

  storage = JSON.parse(storage);

  const devicesPriceAll = () =>
    storage.reduce((acc, el) => {
      return (acc += +el.price * el.count);
    }, 0);

  return (
    <div>
      <h1>Корзина</h1>
      <div>
        <div>
          <strong>
            <div className={style.description}>
              <div>№</div>
              <div>Устройство</div>
              <div>Цена</div>
              <div>Количество</div>
            </div>
          </strong>

          {!storage || storage.length === 0 ? (
            <>
              <div>
                <div>Нет предметов в корзине</div>
              </div>
            </>
          ) : (
            <>
              {storage.map((el, inx) => (
                <div key={inx + 1}>
                  <CartItem
                    id={el.id}
                    model={el.model}
                    price={el.price}
                    state={state}
                    stateChange={stateChange}
                    inx={inx}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div>
        <div>
          <h3>
            {" "}
            {!storage || storage.length ? (
              <>Итого: {devicesPriceAll()}</>
            ) : (
              <></>
            )}
          </h3>
        </div>
        <Modal />
      </div>
    </div>
  );
};

import React from "react";
import OrderItem from "../OrderItem/OrderItem";

import style from "./Profile.module.css";


function Profile() {
  
  return (
    <div className={style.global}>
      <div>Hello Biba</div>
      
      <div>
        <div>Ваши заказы</div>
        <div>
          <OrderItem/>
        </div>
      </div>
      <div>Избранное</div>
      <div>Изменить личную информацию</div>
    </div>
    
  )
}


export default Profile

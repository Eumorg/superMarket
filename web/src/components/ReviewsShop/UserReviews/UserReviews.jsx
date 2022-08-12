import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import style from "../UserReviews/UserReviews.module.css";

export default function UserReviews() {

   const [val, setVal] = useState('')

   async function getText(e) {
      e.preventDefault()
      setVal(val)
      console.log('val: ', val);
      const url = 'http://localhost:4000/reviews';
      try {
         const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ val }),
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json'
            }
         })
         const json = await response.json();
         console.log('Успех:', JSON.stringify(json));
      } catch (error) {
         console.error('Ошибка:', error);
      }
      setVal('')
   }

   return (
      <Container >
         <h3 className={style.user__reviews__title_h3}>Отавить отзыв</h3>
         <div className={style.input}>
            <form
               className={style.input__form}
               autoComplete='off'
               action=""
               method='POST'>
               <input
                  value={val}
                  className={style.input__text}
                  onChange={(e) => setVal(e.target.value)}
                  type="text"
               />
               <button onClick={getText} >Отправить</button>
            </form>
         </div>
      </Container>
   )
}
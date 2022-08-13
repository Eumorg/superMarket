import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import style from "../UserReviews/UserReviews.module.css";

export default function UserReviews({ state, stateChange }) {

   const [val, setVal] = useState('')

   async function getText(e) {
      e.preventDefault()
      const url = 'http://localhost:4000/reviews';
      try {
         await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ val }),
            credentials: 'include',
            headers: {
               'Content-Type': 'application/json'
            }
         })
         setVal('')
         stateChange(!state)
      } catch (error) {
         console.error('Ошибка:', error);
      }
   }

   return (
      <Container >
         <h3 className={style.user__reviews__title_h3}>Оcтавить отзыв</h3>
         <div className={style.input}>
            <input
               value={val}
               className={style.input__text}
               onChange={(e) => setVal(e.target.value)}
               type="text"
            />
            <button onClick={getText} >Отправить</button>
         </div>
      </Container>
   )
}
import React, { useState } from 'react'
import "../UserReviews/UserReviews.css";

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
      <div className='box__rewiews'>
         <h1 className='box__rewiews__h1'>Оставьте Отзыв</h1>
         <textarea
            value={val}
            onChange={(e) => setVal(e.target.value)}
            name="message"
            rows={2}
            className="question box__rewiews__textarea"
            id="msg"
            required
            autoComplete="off"
            defaultValue={""} />
         <label className="box__rewiews__label" htmlFor="msg"><span className="box__rewiews__span">Какой будет ваш отзыв</span></label>
         <input
            className="box__rewiews__input"
            onClick={getText}
            type="submit"
            defaultValue="Submit!" />
      </div>
      // <Container >
      //    <h3 className={style.user__reviews__title_h3}>Оcтавить отзыв</h3>
      //    <div className={style.input}>
      //       <input
      //          value={val}
      //          className={style.input__text}
      //          onChange={(e) => setVal(e.target.value)}
      //          type="text"
      //       />
      //       <button onClick={getText} >Отправить</button>
      //    </div>
      // </Container>
   )
}
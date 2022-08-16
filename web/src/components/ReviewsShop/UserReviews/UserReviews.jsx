import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
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
      <Container >
         <div className="wrap">
            <h2>Feedback form!</h2>
            <p>Оставьте отзыв:</p>
            <form className='form__text' action>
               <textarea name="textarea" cols={30} rows={10} placeholder="Оставьте отзыв:" defaultValue={""} />
               <button className="btn" type="submit">Submit</button>
            </form>
         </div>
      </Container>
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
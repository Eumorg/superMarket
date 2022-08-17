import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "../AllReviews/AllReviews.module.css";
import UserReviews from '../UserReviews/UserReviews';

export default function AllReviews({ state, stateChange }) {

   const inputState = useSelector((store) => store.inputState);
   const allReviews = useSelector((store) => store.allReviews);
   console.log('allReviews: ', allReviews);

   return (
      <Container className={style.container}>
         <div className={style.title__text}>
            {inputState.payload ? (
               <UserReviews state={state} stateChange={stateChange} />
            ) : (
               <>
                  <div className={style.title__inner}>
                     <h4>Чтобы оставить отзыв</h4>
                     <div className={style.title__auth}>
                        <Link className={style.reviews__title_a} to="/signupform">Зарегистрируйтесь</Link>
                        <p className={style.title__inner__p}>или</p>
                        <Link className={style.reviews__title_a} to="/signinform">Автризуйтесь</Link>
                     </div>
                  </div>
               </>
            )}
         </div>
         {/* <h2 className={style.reviews__title_h1} >Что говорят покупатели</h2> */}
         <div className={style.reviews}>
            {allReviews.map((el) => (
               <Row key={el.id}>
                  <Col>
                     <div className={style.reviews__block}>
                        <div className={style.reviews__titles}>
                           <h5>{`Покупатель: ${el.username} оставил отзыв`}</h5>
                           <h5>{`Дата: ${el.createdAt.slice(0, 10)}`}</h5>
                        </div>
                        <p className={style.reviews__title_p}>
                           {el.post}
                        </p>
                     </div>
                  </Col>
               </Row>
            ))}
         </div>
      </Container >
   )
}

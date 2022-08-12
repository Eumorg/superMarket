import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "../AllReviews/AllReviews.module.css";

export default function AllReviews() {
   return (
      <Container className={style.container}>
         <h1 className={style.reviews__title_h1} >Отзывы о магазине</h1>
         <div className={style.reviews}>
            <Row>
               <Col>
                  <div className={style.reviews__block}>
                     <h5>Пользователь:</h5>
                     <p className={style.reviews__title_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eos quia nisi aperiam repudiandae dolore excepturi corporis sequi est culpa officiis veniam, sed sint ab minima ipsa dolores beatae asperiores?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eos quia nisi aperiam repudiandae dolore excepturi corporis sequi est culpa officiis veniam, sed sint ab minima ipsa dolores beatae asperiores?
                     </p>
                  </div>
               </Col>
            </Row>
         </div>
      </Container>
   )
}

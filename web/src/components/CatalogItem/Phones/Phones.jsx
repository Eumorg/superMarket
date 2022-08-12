import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import DeviceItem from '../../DeviceItem/DeviceItem'
import style from "./Phones.module.css";

function Phones() {

   const devices = useSelector((store) => store.devices);
   const navigate = useNavigate();

   const [item, setItem] = useState([])

   useEffect(() => {
      const res = devices.filter((el) => {
         if (el.type === 'phone') {
            return el
         } else {
            return null
         }
      })
      setItem(res)
   }, [devices])

   function onClickHandler(id) {
      navigate(`device/${id}`);
   }

   return (
      <Container>
         <div className={style.catalog}>
            <div>
               <h1 className={style.filter__title__1}>APPLE IPHONE</h1>
            </div>
            <div className={style.device}>
               <Row>
                  {item.map((el) => (
                     <Col onClick={() => onClickHandler(el.id)} className={style.device__item} key={el.id}>
                        <DeviceItem
                           model={el.model}
                           img={el.picture}
                           price={el.price}
                           color={el.color}
                        />
                     </Col>
                  ))}
               </Row>
            </div>
            <div className={style.all__device}>
               <Link to='/catalog' className={style.filter__title__2}>Все товары</Link>
            </div>
         </div>
      </Container>
   )
}

export default Phones
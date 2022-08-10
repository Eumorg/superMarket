import React from 'react'
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DeviceItem from '../DeviceItem/DeviceItem'
import style from "./Catalog.module.css";

function Catalog() {

   const devices = useSelector((store) => store.devices);
   console.log('devices: ', devices);

   const typeDevice = [
      { id: 1, text: 'Рhone', type: 'phone' },
      { id: 2, text: 'Ipad', type: 'tablet' },
      { id: 3, text: 'MacBook', type: 'laptop' },
      { id: 4, text: 'Watch', type: 'watch' },
   ]

   function types(type) {
      const res = devices.filter((el) => {
         if (el.type === type) {
            return el
         }
      })
      console.log('res: ', res);
   }

   return (
      <Container>
         <div className={style.catalog}>
            <div className={style.filter}>
               <div className={style.filter__device}>
                  <h1>Фильтр</h1>
                  <Form>
                     {typeDevice.map((el) => (
                        <Form.Check
                           key={el.id}
                           onClick={() => types(el.type)}
                           label={el.text}
                        />
                     ))}
                  </Form>
               </div>
            </div>
            <div className={style.device}>
               <Row>
                  {devices.map((el) => (
                     <Col key={el.id}>
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
         </div>
      </Container>
   )
}

export default Catalog


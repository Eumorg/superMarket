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

   return (
      <Container>
         <div className={style.catalog}>
            <div className={style.filter}>
               <div className={style.filter__device}>
                  <h1>Фильтр</h1>
                  <Form>
                     <Form.Check
                        // type={type}
                        // id={`default-${type}`}
                        // label={`default ${type}`}
                        label={'yes'}
                     />
                     <Form.Check
                        // type={type}
                        // id={`default-${type}`}
                        // label={`default ${type}`}
                        label={'yes'}
                     />
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


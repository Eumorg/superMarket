import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DeviceItem from '../DeviceItem/DeviceItem'
import '../Catalog/Catalog.module.css'

function Catalog() {
   return (
      <Container>
         <div className='catalog'>
            <div className='filter'>
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
            <div className='device'>
               <Row>
                  <Col>
                     <DeviceItem />
                  </Col>
               </Row>
            </div>
         </div>
      </Container>
   )
}

export default Catalog


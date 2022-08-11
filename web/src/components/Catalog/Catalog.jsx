import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DeviceItem from '../DeviceItem/DeviceItem'
import style from "./Catalog.module.css";

function Catalog() {

   const devices = useSelector((store) => store.devices);
   // const dispatch = useDispatch();
   const navigate = useNavigate();

   const [typeSelected, setTypeSelected] = React.useState([])
   const [filterDevise, setFilterDevise] = React.useState([])
   const [data, setData] = React.useState([])

   React.useEffect(() => {
      setFilterDevise(devices)
   }, [devices])

   React.useEffect(() => {
      if (typeSelected.length > 0) {
         const res = devices.filter((el) => {
            if (typeSelected.includes(el.type)) {
               return el
            }
         })
         setFilterDevise(res)
      } else {
         setFilterDevise(devices)
      }
   }, [typeSelected])

   const typeDevice = [
      { id: 1, text: 'Рhone', type: 'phone' },
      { id: 2, text: 'Ipad', type: 'tablet' },
      { id: 3, text: 'MacBook', type: 'laptop' },
      { id: 4, text: 'Watch', type: 'watch' },
   ]

   function types(device) {
      const copyType = [...typeSelected]
      const findType = copyType.indexOf(device)
      if (findType !== -1) {
         copyType.splice(findType, 1)
         setTypeSelected([...copyType])
      } else {
         setTypeSelected([...typeSelected, device])
      }
   }

   function onClickHandler(id) {
      navigate(`device/${id}`);
   }

   return (
      <Container>
         <div className={style.catalog}>
            <div className={style.filter}>
               <div className={style.filter__device}>
                  <h1 className={style.filter__title__1}>Фильтр</h1>
                  <h4 className={style.filter__title__4}>Категории:</h4>
                  <Form>
                     {typeDevice.map((el) => (
                        <Form.Check
                           className={style.form__filter}
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
                  {filterDevise.map((el) => (
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
         </div>
      </Container>
   )
}

export default Catalog


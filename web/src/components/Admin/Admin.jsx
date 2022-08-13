
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


export const Admin = () => {
  const inputAdmin = useSelector((store) => store.adminState);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputHandler = (e) => { dispatch({ type: "ADMIN_TYPE", payload: { [e.target.name]: e.target.value } }) }
  const dowlandHandler = async (event) => {
    event.preventDefault();
    const formData = { model: inputAdmin.model, description: inputAdmin.description, price: inputAdmin.price, type: inputAdmin.type, color: inputAdmin.color }
   const response = await fetch ("http://localhost:4000/dow",{
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
 if(response.ok){
  navigate('/')
 }
 }


  return (
    <Container>
      <Link to="/admin/admiborder"> Список заказов</Link>
      <Form >
        <InputGroup>
          <InputGroup.Text >Тип устройства</InputGroup.Text>
          <Form.Control onChange={inputHandler} name="description" as="textarea" aria-label="Тип устройства"  />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Модель</InputGroup.Text>
          <Form.Control onChange={inputHandler} name="model" as="textarea" aria-label=" Модель"/>
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Характеристики</InputGroup.Text>
          <Form.Control name="price" onChange={inputHandler} as="textarea" aria-label="Характеристики" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Цена</InputGroup.Text>
          <Form.Control name="type" onChange={inputHandler} as="textarea" aria-label="price" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text >Цвет</InputGroup.Text>
          <Form.Control name="color" onChange={inputHandler} as="textarea" aria-label="Цвет" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text name="picture" onChange={inputHandler}>Изображение</InputGroup.Text>
          <Form.Control as="textarea" aria-label="Изображение" />
        </InputGroup>

        <Button onClick={dowlandHandler} variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </Container>
  )
}

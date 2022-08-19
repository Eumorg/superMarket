
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
    const response = await fetch("http://localhost:4000/dow", {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      navigate('/')
    }
  }


  return (
    <Container style={{ minHeight: 'calc(86vh - 80px' }}>
      <Link style={{ margin: '10px', padding: '1%', fontSize: '20px', textDecoration: 'none' }} to="/admin/admiborder"> Список заказов</Link>
      <Form >
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text >Тип устройства</InputGroup.Text>
          <Form.Control onChange={inputHandler} name="description" as="input" aria-label="Тип устройства" />
        </InputGroup>
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text>Модель</InputGroup.Text>
          <Form.Control onChange={inputHandler} name="model" as="input" aria-label=" Модель" />
        </InputGroup>
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text>Характеристики</InputGroup.Text>
          <Form.Control name="price" onChange={inputHandler} as="textarea" aria-label="Характеристики" />
        </InputGroup>
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text>Цена</InputGroup.Text>
          <Form.Control name="type" onChange={inputHandler} as="input" aria-label="price" />
        </InputGroup>
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text >Цвет</InputGroup.Text>
          <Form.Control name="color" onChange={inputHandler} as="input" aria-label="Цвет" />
        </InputGroup>
        <InputGroup style={{ margin: '10px' }}>
          <InputGroup.Text name="picture" onChange={inputHandler}>Изображение</InputGroup.Text>
          <Form.Control as="input" aria-label="Изображение" />
        </InputGroup>
        <Button style={{ margin: '10px' }} onClick={dowlandHandler} variant="primary" type="submit">
          Добавить
        </Button>
      </Form>
    </Container >
  )
}

import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate } from "react-router-dom";

export const SignUpForm = () => {
const inputState = useSelector((store) => store.inputState);
const dispatch = useDispatch() 
const navigate = useNavigate()

const inputHandler=(e) => {dispatch ({ type:"USER_TYPE", payload:{[e.target.name]:e.target.value}})}

const onSubmitHandler = async (event) => {
  event.preventDefault();
     const formData = {name:inputState.name, email:inputState.email, password:inputState.password}
    
      const response = await fetch('http://localhost:4000/log/signup',{
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await response;
      if (response.ok) {
      dispatch ({ type:"USER_TYPE_NAME", payload: inputState.name})
      navigate('/')
    }
        }

return (
    <Form onSubmit={onSubmitHandler} > 
        <h1>Регистрация</h1>
        <FormGroup className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Логин</Form.Label>
          <Form.Control onChange={inputHandler} name="name" id="disabledTextInput" placeholder="Введите ваш логин" />
        </FormGroup>
        <Form.Label>Email адрес</Form.Label>
        <Form.Control onChange={inputHandler} type="email" name="email" placeholder=" Введите ваш Email" />
      <FormGroup className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control onChange={inputHandler} type="password" name="password" placeholder="Пароль" />
      </FormGroup>
           <Button variant="primary" type="submit">
          Регистрация 
       </Button>
    </Form>
    
  )
}

import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import "../SignUpForm/SignUpForm.css";

export const SignUpForm = () => {
  const inputState = useSelector((store) => store.inputState);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputHandler = (e) => { dispatch({ type: "USER_TYPE", payload: { [e.target.name]: e.target.value } }) }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = { name: inputState.name, email: inputState.email, password: inputState.password }

    const response = await fetch('http://localhost:4000/log/signup', {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    await response;
    if (response.ok) {
      dispatch({ type: "USER_TYPE_NAME", payload: inputState.name })
      navigate('/')
    }
  }

  return (
    <Container>
      <div className="login">
        <h2 className="material-icons">Регистрация</h2>
        <div className="form">
          <h6 className="material-icons-data">Введите ваш</h6>
          <form onSubmit={onSubmitHandler} className="login-form">
            <input onChange={inputHandler} name="name" type="text" placeholder="Логин" required />
            <input onChange={inputHandler} name="email" type="email" placeholder="Почту" required />
            <input onChange={inputHandler} name="password" type="password" placeholder="Пароль" required pattern="[A-Za-z0-9_.]+$" />
            <button>Регистрация</button>
          </form>
        </div>
      </div >
    </Container>
    // <Form onSubmit={onSubmitHandler} >
    //   <h1>Регистрация</h1>
    //   <FormGroup className="mb-3">
    //     <Form.Label htmlFor="disabledTextInput">Логин</Form.Label>
    //     <Form.Control onChange={inputHandler} name="name" id="disabledTextInput" placeholder="Введите ваш логин" />
    //   </FormGroup>
    //   <Form.Label>Email адрес</Form.Label>
    //   <Form.Control onChange={inputHandler} type="email" name="email" placeholder=" Введите ваш Email" />
    //   <FormGroup className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Пароль</Form.Label>
    //     <Form.Control onChange={inputHandler} type="password" name="password" placeholder="Пароль" />
    //   </FormGroup>
    //   <Button variant="primary" type="submit">
    //     Регистрация
    //   </Button>
    // </Form>
  )
}

import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../SignInForm/SignInForm.css";

export const SignInForm = () => {
  const inputState = useSelector((store) => store.inputState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    dispatch({
      type: "USER_TYPE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = { name: inputState.name, password: inputState.password };
    const response = await fetch("http://localhost:4000/log/signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    await response;
    if (response.ok) {
      dispatch({ type: "USER_TYPE_NAME", payload: inputState.name });
      navigate("/");
    }
  };

  return (
    <Container>
      <div className="login">
        <h2 className="material-icons">Вход на сайт</h2>
        <div className="form">
          <h6 className="material-icons-data">Введите ваш</h6>
          <form onSubmit={onSubmitHandler} className="login-form">
            <input onChange={inputHandler} name="name" type="text" placeholder="Логин" required />
            <input onChange={inputHandler} name="password" type="password" placeholder="Пароль" required pattern="[A-Za-z0-9_.]+$" />
            <button>Вход</button>
          </form>
        </div>
      </div >
    </Container>
    // <Form onSubmit={onSubmitHandler}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <h1>Вход на сайт</h1>
    //     <Form.Label>Логин</Form.Label>
    //     <Form.Control
    //       onChange={inputHandler}
    //       name="name"
    //       type="text"
    //       placeholder="Введите ваш логин."
    //     />
    //   </Form.Group>
    //   <Form.Group className="mb-3">
    //     <Form.Label>Пароль</Form.Label>
    //     <Form.Control
    //       onChange={inputHandler}
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //     />
    //   </Form.Group>
    //   <Button variant="primary" name="password" type="submit">
    //     Вход
    //   </Button>
    // </Form>
  );
};

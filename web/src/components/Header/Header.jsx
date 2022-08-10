import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const inputState = useSelector((store) => store.inputState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:4000/log/isauth", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(data => dispatch({ type: "USER_TYPE_NAME", payload: data.name }))
  }, [])

  const logoutHandler = async (event) => {
    const response = await fetch("http://localhost:4000/log/signout", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "USER_DELETE", payload: null });
    navigate('/')
    // const data = await response;
  }

  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>

        <Link to="/" className="nav-link">Супер Магазин</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/catalog" className="nav-link">Каталог</Link>
            <Link to="/trash" className="nav-link">Корзина</Link>
            {inputState.payload ? (
              <>
                <Nav.Link href="#action3">Привет, {inputState.payload}</Nav.Link>
                <Nav.Link onClick={logoutHandler}>Выйти</Nav.Link>
              </>
            ) : (
              <>
                <Link to="/signinform" className="nav-link">Войти</Link>
                <Link to="/signupform" className="nav-link">Зарегистрироваться</Link>
              </>
            )}

            <Nav.Link href="#action5">Контакты</Nav.Link>
            <NavDropdown title="Отзывы" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">
                Смотреть отзыввы
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Оставить отзыв
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;

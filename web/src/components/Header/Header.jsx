import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const inputState = useSelector((store) => store.inputState);
  const dispatch = useDispatch();

  // Поиск девайсов
  const [devices, setDevices] = useState([])

  useEffect(() => {
    async function allDevice() {
      const responce = await fetch('http://localhost:4000/catalog', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await responce.json();
      setDevices(res)
    }
    allDevice()
  }, []);

  const [search, setSearch] = useState([])

  useEffect(() => {
    setSearch(devices)
  }, [devices])

  const getSearch = data => {
    let currentDevice = [], newDevice = [];
    if (data !== "") {
      currentDevice = devices;
      newDevice = currentDevice.filter(el => {
        const lc = el.model.toLowerCase();
        const filter = data.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newDevice = devices;
    }
    setSearch(newDevice);
    console.log(newDevice);
  };

  useEffect(() => {
    dispatch({ type: "SEARCH_DEVICE", payload: search });
  }, [search])

  // Регистрация
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
    await fetch("http://localhost:4000/log/signout", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "USER_DELETE", payload: null });
    navigate('/')
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
            <Link to="/admin" className="nav-link">Секретная кнопка</Link>
            <Link to="/trash" className="nav-link">Корзина</Link>
            {inputState.payload ? (
              <>
                <Link className="nav-link" to="profile">Личный кабинет</Link>
                <Nav.Link onClick={logoutHandler}>Выйти</Nav.Link>
              </>
            ) : (
              <>
                <Link to="/signinform" className="nav-link">Войти</Link>
                <Link to="/signupform" className="nav-link">Зарегистрироваться</Link>
              </>
            )}

            <Link className="nav-link" to="contact"> Контакты</Link>
            <Link className="nav-link" to='/allreviews'>Отзывы о магазине</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              onChange={({ target: { value } }) => getSearch(value)}
              type="search"
              placeholder="Поиск девайсов"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;

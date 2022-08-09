import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Супер Магазин</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Каталог</Nav.Link>
            <Nav.Link href="#action2">Корзина</Nav.Link>
            {true ? (
              <>
                <Nav.Link href="#action3">Войти</Nav.Link>
                <Nav.Link href="#action4">Зарегестрироваться</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#action3">Привет, Биба</Nav.Link>
                <Nav.Link href="#action4">Выйти</Nav.Link>
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

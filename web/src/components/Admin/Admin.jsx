import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Collapse from 'react-bootstrap/Collapse';
export const Admin = () => {
    const [open, setOpen] = useState(false);



  return (
    <Container>
  <>
  
    <Collapse in={!open}>
        <h1 id="example-collapse-text"> 
       Привет, начальник!
       Тут ты можешь добавить устройство в наш магазин
       </h1>
      </Collapse>
      <Button
      onClick={() => setOpen(!open)}
      variant="light"
      aria-expanded={open}
    >
      Скрыть
    </Button>
      </>
              <InputGroup>
        <InputGroup.Text name="model">Тип устройства</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Тип устройства" />
      </InputGroup>
        <InputGroup>
        <InputGroup.Text name="description">Модель</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Модель" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text name="price">Характеристики</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Характеристики" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text name="type">Цена</InputGroup.Text>
        <Form.Control as="textarea" aria-label="price" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text name="color">Цвет</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Цвет" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text name="picture">Изображение</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Изображение" />
      </InputGroup>
      <Button href="#" variant="secondary" size="lg" disabled>
        Добавить устройство
      </Button>
      </Container>
  )
}

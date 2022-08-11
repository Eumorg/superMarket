import React from 'react'
import Container from 'react-bootstrap/Container';

import { Maps } from './Maps/Maps'

import style from "./Contact.module.css";

export const Contact = () => {
  return (
    <Container className ={style.contact}>
      <div>
      <div className={style.option}>
    <h5 className={style.text}>История компании началась в 2005 году, когда розничное подразделение компании Apple IMC Russia открыло в Москве первый магазин Apple Center в «Атриуме».

Сейчас у нас более 87 розничных магазинов в крупнейших городах нашей страны. В ассортименте представлена вся линейка продукции компании Apple, а также широкий выбор дополнительных устройств и аксессуаров.

Всё это время мы руководствовались главным принципом — максимально удовлетворять потребности наших клиентов.

Мы предлагаем удобные программы кредитования и рассрочки, услуги страхования техники, бонусные программы и другие интересные предложения.

Пользователи всегда имели возможность познакомиться с любым продуктом «вживую». Наши консультанты, прошедшие обучение по программе Apple, готовы прийти на помощь и ответить на все вопросы.

Желание максимально соответствовать требованиям самых взыскательных клиентов и выстраивать долгосрочные отношения с ними за счёт уровня обслуживания принесло свои плоды. За прошедшие годы нашими клиентами стали сотни тысяч людей и десятки тысяч компаний. Мы гордимся тем, что они выбрали нас.</h5>
    <img className = {style.img}src="https://re-store.ru/about/img/iphone.jpg"/>
    </div>
    <div className={style.map}>
    <Maps />
    <div style={{margin:"10px"}}>
      <h1 >Галерея Молл</h1>
       <h4>ул. Тверская,9
      с 10:00 до 22:00 без выходных
      Как проехать
      +7 (905) 782-61-75</h4>
      <h4><img src="https://papik.pro/uploads/posts/2022-01/1643603252_2-papik-pro-p-logotip-telegram-2.png" className={style.contact_img}/> @Shop</h4>
      <h4><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXAgKezY4CNT_HUA8w9hUxV0kYQCNlJFliT9xfEQ2xwk5mllzUFe2y7_VklksbYspVyQ&usqp=CAU" className={style.contact_img}/> #росграмм</h4>
      <h4><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Odnoklassniki.svg/1200px-Odnoklassniki.svg.png" className={style.contact_img}/> @Одногкласники</h4>
    </div>
    </div>
    </div>
    </Container>
  )
}

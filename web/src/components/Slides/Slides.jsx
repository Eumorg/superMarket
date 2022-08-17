import Carousel from 'react-bootstrap/Carousel';
import '../Slides/Slides.module.css'
import React from 'react'
import style from "./Slides.module.css";

export const Slides = () => {
  return (
    <Carousel>
      <Carousel.Item className={style.ipad}>
        <img
          className="d-block w-100"
          src="https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>IPhone</h2>
          <p>Новая камера нереальные возможности всего то 1100$ </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.ipad}>
        <img
          className="d-block w-100 ipad__inner"
          src="https://ilounge.ua/files/uploads/new_4/ipad-pro-max-15-data-vyhoda-3.jpg
          "
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>IPad</h2>
          <p>Сверхширокоугольная фронтальная камера 12 Мп</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={style.mac}>
        <div className={style.mac__inner}>
          <img
            className="d-block w-100"
            src="https://www.xda-developers.com/files/2022/06/MacBook-Air-2022-in-three-colors-1900x700_c.jpg"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h2>MacBooK</h2>
          <p>Суперсила профессиональных Прогеров</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

// https://www.xda-developers.com/files/2022/06/MacBook-Air-2022-in-three-colors-1900x700_c.jpg
// https://ilounge.ua/files/uploads/new_4/ipad-pro-max-15-data-vyhoda-3.jpg



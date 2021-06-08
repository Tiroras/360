import React from 'react';
import {Carousel} from "react-bootstrap";
import image_one from "./../../../../assets/images/slider/1.jpg";
import image_two from "./../../../../assets/images/slider/2.jpg";
import image_three from "./../../../../assets/images/slider/3.jpg";


const Slider = () => {
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-700"
          src={image_one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Давайте оценку своим коллегам</h3>
          <p>Оценивайте своих коллег и руководителей чтобы помочь найти им их слабые и сильные стороны</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-700"
          src={image_two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Полуйте оценку от своих коллег</h3>
          <p>Узнайте о своих сильных и слабых сторон, которые замечают коллеги и руководители</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-h-700"
          src={image_three}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Давайте все станем немного лучше</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;
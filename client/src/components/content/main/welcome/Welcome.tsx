import React from 'react';
import {ListGroup} from "react-bootstrap";
import Slider from "./Slider";
import classes from "./Welcome.module.css";


const Welcome = () => {
  return(
    <ListGroup.Item className={classes.block}>
      <div>
        <div className={classes.text}>
          <h3>Проводим опросы для оценивания персонала используя метод 360 градусов</h3>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default Welcome;
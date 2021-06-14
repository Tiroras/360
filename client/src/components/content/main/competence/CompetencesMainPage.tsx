import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import classes from "./CompetenceMainPage.module.css";


const CompetenceMainPage = () => {
  return(
    <ListGroup horizontal className={classes.competences}>
      <ListGroupItem className={`${classes.text} s34 bold`} >
        Для получения оценки окружение её цели должны пройти опрос, ответив на ряд вопросов. Ответ на каждый из этих вопросов даст вам оценку по той, или иной компетенции.
      </ListGroupItem>
      <ListGroupItem className={`bg-success text-white ${classes.list}`}>
        <div className={"s34 bold"}>
          Список компетенций:
        </div>
        <div className={`${classes.list_competences}`}>
          <div className={"s28"}>
            Клиентоориентированность
          </div>
          <div className={"s28"}>
            Лояльность
          </div>
          <div className={"s28"}>
            Инициативность
          </div>
          <div className={"s28"}>
            Адаптивность
          </div>
          <div className={"s28"}>
            Самостоятельность
          </div>
          <div className={"s28"}>
            Стрессоустойчивость
          </div>
          <div className={"s28"}>
            Стремление к общению
          </div>
          <div className={"s28"}>
            Управление командой
          </div>
          <div className={"s28"}>
            Планирование
          </div>
          <div className={"s28"}>
            Обучение
          </div>
          <div className={"s28"}>
            Мотивирование
          </div>
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}

export default CompetenceMainPage;
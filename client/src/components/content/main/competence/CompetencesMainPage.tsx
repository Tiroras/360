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
        <div className={"bold"}>
          Список компетенций:
        </div>
        <div className={`${classes.list_competences}`}>
          <div>
            Клиентоориентированность
          </div>
          <div>
            Лояльность
          </div>
          <div>
            Инициативность
          </div>
          <div>
            Адаптивность
          </div>
          <div>
            Самостоятельность
          </div>
          <div>
            Стрессоустойчивость
          </div>
          <div>
            Стремление к общению
          </div>
          <div>
            Управление командой
          </div>
          <div>
            Планирование
          </div>
          <div>
            Обучение
          </div>
          <div>
            Мотивирование
          </div>
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}

export default CompetenceMainPage;
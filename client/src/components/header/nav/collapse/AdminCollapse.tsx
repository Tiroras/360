import React from 'react'
import {Link} from "react-router-dom";
import {Collapse} from "react-bootstrap";
import classes from "./Collapse.module.css";


interface IProps {
  open: boolean;
  setCollapse: any;
}

const AdminCollapse = (props: IProps) => {
  return(
    <div>
      <div>
        <button
          className={`${classes.admin} bg-success text-white`}
          onClick={props.setCollapse}
        >
          <div className={"bold"}>
            Панель администратора
          </div>
        </button>
      </div>
      <div className={'text-white'}>
        <Collapse in={props.open}>
          <div id="admin-panel">
            <div className={classes.el}>
              <Link to="/admin/registration" className={"text-white"}>
                Добавить пользователя
              </Link>
            </div>
            <div className={classes.el}>
              <Link to="/admin/users" className={"text-white"}>
                Список пользователей
              </Link>
            </div>
            <div className={classes.el}>
              <Link to="/admin/polls" className={"text-white"}>
                Список опросов
              </Link>
            </div>
            <div className={classes.el}>
              <Link to="/admin/add-poll" className={"text-white"}>
                Выбрать цель опроса
              </Link>
            </div>
            <div className={classes.el}>
              <Link to="/admin/add-interviewer" className={"text-white"}>
                Выбрать проходящих опрос
              </Link>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default AdminCollapse;
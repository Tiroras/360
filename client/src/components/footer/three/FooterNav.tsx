import React from 'react';
import {Link} from "react-router-dom";
import classes from "./FooterNav.module.css";


interface IProps {
  isIn: boolean;
}

const FooterNav = (props: IProps) => {
  return(
    <div className={classes.container}>
      <div>
        <Link to={"/home"} className={"text-light"}>
          Главная
        </Link>
      </div>
      <div>
        <Link to={"/polls"} className={"text-light"}>
          Опросы
        </Link>
      </div>
      {props.isIn ?
        <div>
          <Link to={"/profile"} className={"text-light"}>
            Профиль
          </Link>
        </div>
        :
        <div>
          <Link to={"/login"} className={"text-light"}>
            Войти
          </Link>
        </div>
      }
    </div>
  )
}

export default FooterNav;
import React from 'react';
import {Nav} from "react-bootstrap";
import classes from "./Logout.module.css";


interface IProps {
  handleClick: () => void;
}

const Logout = (props: IProps) => {
  return(
    <Nav.Link className={classes.logout}>
      <button className="text-light" onClick={props.handleClick}>
        Выйти
      </button>
    </Nav.Link>
  )
}

export default Logout;
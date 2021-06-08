import React from "react";
import { ListGroup } from "react-bootstrap";
import {IUserInfo} from "../../../interfaces/User.types";
import classes from "./Users.module.css";


const User = (props: IUserInfo) => {
  return(
    <ListGroup horizontal className={classes.user}>
      <ListGroup.Item className="user-id">
        {props.id}
      </ListGroup.Item>
      <ListGroup.Item className="user-name">
        {props.user_name}
      </ListGroup.Item>
      <ListGroup.Item className="user-pos">
        {props.user_position}
      </ListGroup.Item>
      <ListGroup.Item className="user-login">
        {props.login}
      </ListGroup.Item>
      <ListGroup.Item className="user-email">
        {props.email}
      </ListGroup.Item>
      <ListGroup.Item className="user-admin">
        {props.isAdmin}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default User;
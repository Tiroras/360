import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
import LoginFormContainer from "./forms/LoginForm.container";
import classes from "./Login.module.css";


const Login = () => {
  return(
    <Card className={classes.login}>
      <ListGroup>
        <ListGroup.Item className="fw-bold s22">
          Войдите в аккаунт
        </ListGroup.Item>
        <ListGroup.Item>
          <LoginFormContainer />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Login;
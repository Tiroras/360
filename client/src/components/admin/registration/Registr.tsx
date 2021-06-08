import React from 'react';
import RegistrationFormContainer from "./form/RegistrForm.container";
import {Card, ListGroup} from "react-bootstrap";
import classes from "./Registr.module.css";
import withClosedAccess from "../../../assets/hocs/ClosedAccess";


const Registration = () => {
  return(
    <Card className={classes.registr}>
      <ListGroup>
        <ListGroup.Item>
          <h3>Регистрация</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <RegistrationFormContainer />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default withClosedAccess(Registration)
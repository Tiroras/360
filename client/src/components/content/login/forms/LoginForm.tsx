import React from 'react';
import {Form, reduxForm, Field} from "redux-form";
import {Button} from "react-bootstrap";
import classes from "../Login.module.css";
import {minLengthCreator, required} from "../../../../assets/validators/validators";
import {Input} from "../../../form-controls/FormControls";


const minLength = minLengthCreator(6);

const LoginForm = (props) => {
  return(
      <Form onSubmit={props.handleSubmit}>
        <div className={classes.field}>
          <Field
            name="email"
            id="email"
            placeholder="Введите почту"
            component={Input}
            validate={[required]}
          />
        </div>
        <div className={classes.field}>
          <Field
            name="password"
            id="password"
            placeholder="Введите пароль"
            component={Input}
            type="password"
            validate={[required, minLength]}
          />
        </div>
        <div className={classes.field}>
          <Button variant="warning" type="submit">
            Войти
          </Button>
        </div>
      </Form>
  )
}

export default reduxForm({form: "login"})(LoginForm);
import React from 'react';
import {Form, reduxForm, Field} from "redux-form";
import {Input} from "../../../form-controls/FormControls";
import classes from "../Registr.module.css";
import {maxLengthCreator, minLengthCreator, required} from "../../../../assets/validators/validators";


const minName = minLengthCreator(3);
const minPos = minLengthCreator(5);
const minPassword = minLengthCreator(6);
const maxLength = maxLengthCreator(50);

const RegistrationForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className={classes.input}>
        <Field
          name="email"
          id="email"
          placeholder="Введите email"
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="name"
          id="name"
          placeholder="Введите имя"
          component={Input}
          validate={[required, minName, maxLength]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="family"
          id="family"
          placeholder="Введите фамилию"
          component={Input}
          validate={[required, minName, maxLength]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="patronymic"
          id="patronymic"
          placeholder="Введите отчество"
          component={Input}
          validate={[required, minName, maxLength]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="position"
          id="position"
          placeholder="Введите должность"
          component={Input}
          validate={[required, minPos, maxLength]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="password"
          id="password"
          placeholder="Введите пароль"
          component={Input}
          type="password"
          validate={[required, minPassword]}
        />
      </div>
      <div className={classes.input}>
        <Field
          name="password_again"
          id="password_again"
          placeholder="Введите пароль ещё раз"
          component={Input}
          type="password"
          validate={[required, minPassword]}
        />
      </div>
      <div className={classes.input}>
        <button className="btn btn-warning" >
          Зарегистрировать пользователя
        </button>
      </div>
    </Form>
  );
}

export default reduxForm({form: "registration"})(RegistrationForm);
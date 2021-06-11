import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Form, reduxForm} from "redux-form";
import Question from "./Question";
import {TQuestion} from "../../../../interfaces/Polls.types";


const Poll = (props: any) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      {props.questions.map((quest: TQuestion) => (
        <Question
          question={quest.question}
          id={quest.id}
          key={quest.id}/>
      ))}
      {props.errorMessage && <ListGroup.Item className={"s22"}>{props.errorMessage}</ListGroup.Item>}
      <ListGroup.Item>
        <button className="btn btn-warning">
          Отправить оценку
        </button>
      </ListGroup.Item>
    </Form>
  );
};

export default reduxForm({form: "poll"})(Poll);
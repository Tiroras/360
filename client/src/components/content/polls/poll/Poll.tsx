import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Form, reduxForm} from "redux-form";
import Question from "./Question";
import {TQuestion} from "../../../../interfaces/Polls.types";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";


const Poll = (props: any) => {
  const questions: Array<TQuestion> = useSelector((state: ReducersType) => state.pools.questions);

  return (
    <Form onSubmit={props.handleSubmit((values: any) => console.log(values))}>
        {questions.map((quest: TQuestion) => (
          <Question
            question={quest.question}
            id={quest.id}
            key={quest.id}/>
        ))}
        <ListGroup.Item>
          <button className="btn btn-warning" >
            Отправить оценку
          </button>
        </ListGroup.Item>
    </Form>
  );
}

export default reduxForm({form: "poll"})(Poll);
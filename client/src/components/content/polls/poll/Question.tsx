import React from 'react';
import {ListGroup} from "react-bootstrap";
import AnswerOpts from "./AnswerOpt";


interface IProps {
  id: number
  question: string;
}

const Question = (props: IProps) => {
  return(
    <ListGroup.Item>
      <div>
        <div>
          <label className={'fw-bold'}>
            {props.question}
          </label>
        </div>
        <div>
          <AnswerOpts
            id={props.id}
          />
        </div>
      </div>
    </ListGroup.Item>
  )
}

export default Question;

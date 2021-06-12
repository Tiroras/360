import React from 'react';
import SelectPollContainer from "./polls/SelectPoll.container";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import SelectInterviewersContainer from "./users/SelectInterviewers.container";
import {Form, reduxForm} from "redux-form";


// interface IProps {
//   input: string;
//   setInput: (input: string) => void;
// }

const AdminAddInterviewer = (props) => {
  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <ListGroup>
          <div>
            <ListGroupItem>
              <button className={"btn btn-warning"}>
                Добавить интервьюверов
              </button>
            </ListGroupItem>
            <ListGroupItem>
              <SelectPollContainer
                input={props.input}
                setInput={props.setInput}
              />
            </ListGroupItem>
            <ListGroupItem>
              <SelectInterviewersContainer/>
            </ListGroupItem>
          </div>
        </ListGroup>
      </Form>
    </div>
  );
}

export default reduxForm({form: "add-interviewers"})(AdminAddInterviewer);
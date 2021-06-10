import React from 'react';
import SelectPollContainer from "./polls/SelectPoll.container";
import {ListGroup, ListGroupItem} from "react-bootstrap";




interface IProps {
  input: string;
  setInput: (input: string) => void;
}

const AdminAddInterviewer = (props: IProps) => {
  return (
    <ListGroup>
      <div>
        <ListGroupItem>
          <SelectPollContainer
            input={props.input}
            setInput={props.setInput}
          />
        </ListGroupItem>
        <ListGroupItem>

        </ListGroupItem>
      </div>
    </ListGroup>
  );
}

export default AdminAddInterviewer;
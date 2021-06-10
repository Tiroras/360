import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Field} from "redux-form";


interface IPoll {
  id: number;
  appraisal_target_id: number;
  isOver: boolean;
  user_name: string;
  user_position: string;
  login: string;
  email: string;
}

const SelectPollListItem = (props: IPoll) => {
  return(
    <div>
      <label htmlFor={`poll-${props.id}`}>
        <ListGroup horizontal>
          <ListGroupItem>
            <Field
              type="radio"
              component="input"
              id={`poll-${props.id}`}
              value={`${props.id}`}
              name="polls"
            />
          </ListGroupItem>
          <ListGroupItem>
            {props.id}
          </ListGroupItem>
          <ListGroupItem>
            {props.appraisal_target_id}
          </ListGroupItem>
          <ListGroupItem>
            {props.isOver}
          </ListGroupItem>
          <ListGroupItem>
            {props.user_name}
          </ListGroupItem>
          <ListGroupItem>
            {props.user_position}
          </ListGroupItem>
          <ListGroupItem>
            {props.login}
          </ListGroupItem>
          <ListGroupItem>
            {props.email}
          </ListGroupItem>
        </ListGroup>
      </label>
    </div>
  )
}

export default SelectPollListItem;
import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";


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
    <ListGroup horizontal>
      <ListGroupItem>
        <input
          type="radio"
          name="polls"
          value={props.id}
          id={`poll-${props.id}`}
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
  )
}

export default SelectPollListItem;
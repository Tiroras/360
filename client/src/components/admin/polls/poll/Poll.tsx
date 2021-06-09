import React from 'react';
import classes from "../AdminPolls.module.css";
import {ListGroup} from "react-bootstrap";


interface IProps {
  id: number;
  appraisal_target_id: number;
  isOver: boolean;
  user_name: string;
  user_position: string;
  login: string;
  email: string;
}

const AdminPollItem = (props: IProps) => {
  return(
    <ListGroup horizontal={'sm'} className={classes.poll}>
      <ListGroup.Item className="poll-id">
        {props.id}
      </ListGroup.Item>
      <ListGroup.Item className="poll-target-id">
        {props.appraisal_target_id}
      </ListGroup.Item>
      <ListGroup.Item className="poll-isOver">
        {props.isOver}
      </ListGroup.Item>
      <ListGroup.Item className="poll-target-name">
        {props.user_name}
      </ListGroup.Item>
      <ListGroup.Item className="poll-target-position">
        {props.user_position}
      </ListGroup.Item>
      <ListGroup.Item className="poll-target-login">
        {props.login}
      </ListGroup.Item>
      <ListGroup.Item className="poll-target-email">
        {props.email}
      </ListGroup.Item>
    </ListGroup>
  )
}

export default AdminPollItem;
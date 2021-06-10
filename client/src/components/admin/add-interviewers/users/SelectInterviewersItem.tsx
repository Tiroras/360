import React from 'react';
import {IUserInfo} from "../../../../interfaces/User.types";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Field} from "redux-form";


const SelectInterviewersItem = (props: IUserInfo) => {
  return (
    <div>
      <label htmlFor={`user-${props.id}`}>
        <ListGroup horizontal>
          <ListGroupItem>
            <Field
              component={"input"}
              type="checkbox"
              name={`${props.id}`}
              id={`user-${props.id}`}
            />
          </ListGroupItem>
          <ListGroupItem className="user-id">
            {props.id}
          </ListGroupItem>
          <ListGroupItem className="user-name">
            {props.user_name}
          </ListGroupItem>
          <ListGroupItem className="user-pos">
            {props.user_position}
          </ListGroupItem>
          <ListGroupItem className="user-login">
            {props.login}
          </ListGroupItem>
          <ListGroupItem className="user-email">
            {props.email}
          </ListGroupItem>
          <ListGroupItem className="user-admin">
            {props.isAdmin}
          </ListGroupItem>
        </ListGroup>
      </label>
    </div>
  );
}

export default SelectInterviewersItem;
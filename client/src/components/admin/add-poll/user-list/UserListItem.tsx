import React from 'react';
import {ListGroup} from "react-bootstrap";
import {IUserInfo} from "../../../../interfaces/User.types";
import {Field} from "redux-form";



const UserListItem = (props: IUserInfo) => {
  return (
    <div>
      <label htmlFor={`user-${props.id}`}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Field
              type="radio"
              component="input"
              id={`user-${props.id}`}
              value={`${props.id}`}
              name={`users`}
            />
          </ListGroup.Item>
          <ListGroup.Item className="user-id">
            {props.id}
          </ListGroup.Item>
          <ListGroup.Item className="user-name">
            {props.user_name}
          </ListGroup.Item>
          <ListGroup.Item className="user-pos">
            {props.user_position}
          </ListGroup.Item>
          <ListGroup.Item className="user-login">
            {props.login}
          </ListGroup.Item>
          <ListGroup.Item className="user-email">
            {props.email}
          </ListGroup.Item>
          <ListGroup.Item className="user-admin">
            {props.isAdmin}
          </ListGroup.Item>
        </ListGroup>
      </label>
    </div>
  );
}

export default UserListItem;
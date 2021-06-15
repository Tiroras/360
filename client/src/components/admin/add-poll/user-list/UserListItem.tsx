import React from 'react';
import {ListGroup} from "react-bootstrap";
import {IUserInfo} from "../../../../interfaces/User.types";
import {Field} from "redux-form";



const UserListItem = (props: IUserInfo) => {
  return (
    <tr>
      <td>
        <Field
          type="radio"
          component="input"
          id={`user-${props.id}`}
          value={`${props.id}`}
          name={`users`}
        />
      </td>
      <td className="user-id">
        <label htmlFor={`user-${props.id}`}>
          {props.id}
        </label>
      </td>
      <td className="user-name">
        <label htmlFor={`user-${props.id}`}>
          {props.user_name}
        </label>
      </td>
      <td className="user-pos">
        <label htmlFor={`user-${props.id}`}>
          {props.user_position}
        </label>
      </td>
      <td className="user-login">
        <label htmlFor={`user-${props.id}`}>
          {props.login}
        </label>
      </td>
      <td className="user-email">
        <label htmlFor={`user-${props.id}`}>
          {props.email}
        </label>
      </td>
      <td className="user-admin">
        <label htmlFor={`user-${props.id}`}>
          {props.isAdmin}
        </label>
      </td>
    </tr>
  );
}

export default UserListItem;
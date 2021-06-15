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
  return (
    <tr>
      <td>
        <Field
          type="radio"
          component="input"
          id={`poll-${props.id}`}
          value={`${props.id}`}
          name="polls"
        />
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.id}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.appraisal_target_id}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.isOver}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.user_name}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.user_position}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.login}
        </label>
      </td>
      <td>
        <label htmlFor={`poll-${props.id}`}>
          {props.email}
        </label>
      </td>
    </tr>
  );
}

export default SelectPollListItem;
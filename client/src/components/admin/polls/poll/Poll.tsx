import React from 'react';


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
    <tr>
      <td className="poll-id">
        {props.id}
      </td>
      <td className="poll-target-id">
        {props.appraisal_target_id}
      </td>
      <td className="poll-isOver">
        {props.isOver}
      </td>
      <td className="poll-target-name">
        {props.user_name}
      </td>
      <td className="poll-target-position">
        {props.user_position}
      </td>
      <td className="poll-target-login">
        {props.login}
      </td>
      <td className="poll-target-email">
        {props.email}
      </td>
    </tr>
  )
}

export default AdminPollItem;
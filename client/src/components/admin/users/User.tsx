import React from "react";
import {IUserInfo} from "../../../interfaces/User.types";


const User = (props: IUserInfo) => {
  return(
    <tr>
      <td className="user-id">
        {props.id}
      </td>
      <td className="user-name">
        {props.user_name}
      </td>
      <td className="user-pos">
        {props.user_position}
      </td>
      <td className="user-login">
        {props.login}
      </td>
      <td className="user-email">
        {props.email}
      </td>
      <td className="user-admin">
        {props.isAdmin}
      </td>
    </tr>
  )
}

export default User;
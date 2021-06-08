import React from 'react';
import {IUserInfo} from "../../../interfaces/User.types";
import User from "./User";
import {ListGroup} from "react-bootstrap";


const Users = (props) => {
  return(
    <div>
      <div>
        <h3>Список пользователй</h3>
      </div>
      <ListGroup>
        {props.users.map((user: IUserInfo) => (
          <User
            key={user.id}
            id={user.id}
            user_name={user.user_name}
            user_position={user.user_position}
            isAdmin={user.isAdmin}
            login={user.login}
            email={user.email}
          />
        ))}
      </ListGroup>
    </div>
  )
}

export default Users
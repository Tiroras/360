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
      <ListGroup horizontal>
        <ListGroup.Item>id пользователя</ListGroup.Item>
        <ListGroup.Item>ФИО пользователя</ListGroup.Item>
        <ListGroup.Item>Должность пользователя</ListGroup.Item>
        <ListGroup.Item>Это админ</ListGroup.Item>
        <ListGroup.Item>Логин пользователя</ListGroup.Item>
        <ListGroup.Item>Почта пользователя</ListGroup.Item>
      </ListGroup>
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
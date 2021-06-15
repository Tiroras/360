import React from 'react';
import {IUserInfo} from "../../../interfaces/User.types";
import User from "./User";
import {Table} from "react-bootstrap";


const Users = (props) => {
  return(
    <div>
      <div>
        <h3>Список пользователй</h3>
      </div>
      <Table>
        <thead>
          <th>id пользователя</th>
          <th>ФИО пользователя</th>
          <th>Должность пользователя</th>
          <th>Это админ</th>
          <th>Логин пользователя</th>
          <th>Почта пользователя</th>
        </thead>
        <tbody>
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
        </tbody>
      </Table>
    </div>
  )
}

export default Users
import React from 'react';
import {IUserInfo} from "../../../../interfaces/User.types";
import UserListItem from "./UserListItem";
import {reduxForm, Form} from "redux-form";
import {Table} from "react-bootstrap";


// interface IProps {
//   users: IUserInfo[];
//   handleSubmit: any;
// }

const UserList = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
        <h3>
          Список пользователей
        </h3>
      </div>
      <div>
        <button className="btn btn-warning">
          Создать опрос
        </button>
      </div>
      <Table>
        <thead>
          <th>*</th>
          <th>id пользователя</th>
          <th>фио пользователя</th>
          <th>Должность</th>
          <th>Логин</th>
          <th>Электронная почта</th>
          <th>Это Админ</th>
        </thead>
        <tbody>
        {props.users.map((user: IUserInfo) => (
          <UserListItem
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
    </Form>
  );
}

export default reduxForm({form: "add-poll"})(UserList);
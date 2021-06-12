import React from 'react';
import {IUserInfo} from "../../../../interfaces/User.types";
import UserListItem from "./UserListItem";
import {reduxForm, Form} from "redux-form";


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
      <div>
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
      </div>
    </Form>
  );
}

export default reduxForm({form: "add-poll"})(UserList);
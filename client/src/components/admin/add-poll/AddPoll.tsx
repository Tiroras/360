import React from 'react';
import AddPollForm from "./form/AddPollForm";
import UserListContainer from "./user-list/UserList.container";
import {IUserInfo} from "../../../interfaces/User.types";
import {ListGroup} from "react-bootstrap";


interface IProps {
  input: string;
  users: IUserInfo[];
  setInput: (data: string) => void;
  usersFilter: () => void;
  clearFilter: () => void;
}

const AdminAddPoll = (props: IProps) => {
  return(
    <ListGroup>
      <ListGroup.Item>
        <h3>Создать цель для опроса</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <AddPollForm
          input={props.input}
          setInput={props.setInput}
          usersFilter={props.usersFilter}
          clearFilter={props.clearFilter}
        />
      </ListGroup.Item>
      <ListGroup.Item>
        <UserListContainer
          users={props.users}
        />
      </ListGroup.Item>
    </ListGroup>
  )
}

export default AdminAddPoll;
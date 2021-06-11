import React from 'react';
import UserList from "./UserList";
import {IUserInfo} from "../../../../interfaces/User.types";
import useHttp from "../../../../assets/hooks/http";


interface IProps {
  users: IUserInfo[];
}

const UserListContainer = (props: IProps) => {
  const {request} = useHttp();

  const data: any = {
    users: props.users
  }

  const handleSubmit = async (form) => {
    try{
      const data = await request('/api/polls/admin', "POST", {...form});
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <UserList
      {...data}
      onSubmit={handleSubmit}
    />
  )
}

export default UserListContainer;
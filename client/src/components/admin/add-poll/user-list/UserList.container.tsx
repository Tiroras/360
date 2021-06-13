import React, {useState} from 'react';
import UserList from "./UserList";
import {IUserInfo} from "../../../../interfaces/User.types";
import useHttp from "../../../../assets/hooks/http";
import { Redirect } from 'react-router-dom';


interface IProps {
  users: IUserInfo[];
}

const UserListContainer = (props: IProps) => {
  const [redirect, setRedirect] = useState(false);
  const {request} = useHttp();

  const data: any = {
    users: props.users
  }

  const handleSubmit = async (form) => {
    try{
      await request('/api/polls/admin', "POST", {...form});
      setRedirect(true)
    } catch (e) {
      console.log(e);
    }
  }
  if(redirect){
    return <Redirect to={"/"}/>;
  }

  return(
    <UserList
      {...data}
      onSubmit={handleSubmit}
    />
  )
}

export default UserListContainer;
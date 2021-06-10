import React, {useEffect, useState} from 'react';
import AdminAddPoll from "./AddPoll";
import useHttp from "../../../assets/hooks/http";
import {IUserInfo} from "../../../interfaces/User.types";


const AdminAddPollContainer = () => {
  const [input, setInput] = useState<string>("")
  const [users, setUsers] = useState([]);
  const {request} = useHttp();

  useEffect(() => {
    request('/api/users/', "GET").then((res) => {
      setUsers(res)
    }).catch(e => console.log(e));
  }, [])

  const usersFilter = () => {
    setUsers(users.filter((user: IUserInfo) => {
      return user.id.toString() === input || user.user_name.includes(input)
        || user.email.includes(input) || user.login.includes(input);
    }));
  }

  const clearFilter = async () => {
    await request('/api/users/', "GET").then((res) => {
      setUsers(res)
    }).catch(e => console.log(e));
    setInput("");
  }

  return(
    <AdminAddPoll
      users={users}
      input={input}
      setInput={setInput}
      usersFilter={usersFilter}
      clearFilter={clearFilter}
    />
  )
}

export default AdminAddPollContainer;
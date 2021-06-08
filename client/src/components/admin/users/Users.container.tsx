import React, {useEffect, useState} from 'react';
import Users from "./Users";
import withClosedAccess from "../../../assets/hocs/ClosedAccess";
import useHttp from "../../../assets/hooks/http";
import {IUserInfo} from "../../../interfaces/User.types";


const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const {error, request} = useHttp();


  useEffect(() => {
    request('/api/users/', "GET").then((res) => {
      setUsers(res)
    }).catch(e => console.log(e));
  }, [])

  return(
    <Users
      users={users}
    />
  )
}

export default withClosedAccess(UsersContainer);
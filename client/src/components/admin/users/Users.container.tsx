import React, {useEffect, useState} from 'react';
import Users from "./Users";
import withClosedAccess from "../../../assets/hocs/ClosedAccess";
import useHttp from "../../../assets/hooks/http";


const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const {request} = useHttp();


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
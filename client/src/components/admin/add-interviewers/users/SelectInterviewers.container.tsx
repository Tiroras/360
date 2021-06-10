import React, {useEffect, useState} from 'react';
import SelectInterviewers from "./SelectInterviewers";
import useHttp from "../../../../assets/hooks/http";


const SelectInterviewersContainer = () => {
  const [users, setUsers] = useState([]);
  const {request} = useHttp();


  useEffect(() => {
    request('/api/users/', "GET").then((res) => {
      setUsers(res)
    }).catch(e => console.log(e));
  }, [])

  return(
    <SelectInterviewers
      users={users}
    />
  )
}

export default SelectInterviewersContainer;
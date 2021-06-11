import React, {useEffect, useState} from 'react';
import Polls from "./Polls";
import useHttp from "../../../assets/hooks/http";


const AdminPollsContainer = () => {
  const [polls, setPolls] = useState([]);
  const {request} = useHttp();


  useEffect(() => {
    request('/api/polls/admin', "GET").then((res) => {
      setPolls(res)
    }).catch(e => console.log(e));
  }, [])


  return(
    <Polls polls={polls} />
  )
}

export default AdminPollsContainer;
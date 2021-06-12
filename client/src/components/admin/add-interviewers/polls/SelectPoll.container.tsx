import React, {useEffect, useState} from 'react';
import SelectPoll from "./SelectPoll";
import useHttp from "../../../../assets/hooks/http";


interface IPoll {
  id: number;
  appraisal_target_id: number;
  isOver: boolean;
  user_name: string;
  user_position: string;
  login: string;
  email: string;
}

interface IProps {
  input: string;
  setInput: (input: string) => void;
}

const SelectPollContainer = (props: IProps) => {
  const {request} = useHttp();
  const [polls, setPolls] = useState([])
  const [filteredPolls, setFilteredPolls] = useState([]);
  useEffect(() => {
    request('/api/polls/admin', "GET").then((res) => {
      setPolls(res);
      setFilteredPolls(res);
    }).catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if(props.input){
      setFilteredPolls(polls.filter((poll: IPoll) => {
        return poll.id.toString() === props.input || poll.user_name.includes(props.input) ||
          poll.user_position.includes(props.input) || poll.login.includes(props.input) ||
          poll.email.includes(props.input);
      }));
    }
  }, [props.input]);

  return(
    <SelectPoll
      input={props.input}
      polls={filteredPolls}
      setInput={props.setInput}
    />
  )
}

export default SelectPollContainer;
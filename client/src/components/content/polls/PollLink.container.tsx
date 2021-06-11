import React from 'react';
import PoolLink from "./PoolLink";
import {useDispatch} from "react-redux";
import {setCurrentPollAC} from "../../../store/pools-reducer";


interface IProps {
  id: number;
  inter_id: number;
  user_name: string;
  user_position: string;
}

const PollLinkContainer = (props: IProps) => {
  const dispatch = useDispatch();
  const setCurrentPoll = (poll) => {
    console.log("Tac")
    dispatch(setCurrentPollAC(poll));
  }

  return(
    <PoolLink
      id={props.id}
      inter_id={props.inter_id}
      user_name={props.user_name}
      user_position={props.user_position}
      setCurrentPoll={setCurrentPoll}
    />
  )
}

export default PollLinkContainer;
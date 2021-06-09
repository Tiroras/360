import React from 'react';
import Polls from "./Polls";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";
import {TPoll} from "../../../interfaces/Polls.types";


const PollsContainer = () => {
  const pools: Array<TPoll> = useSelector((state: ReducersType) => state.pools.polls);
  const isIn: boolean = useSelector((state: ReducersType) => state.user.user.isIn);

  return(
    <Polls
      pools={pools}
      isIn={isIn}
    />
  )
}

export default PollsContainer;
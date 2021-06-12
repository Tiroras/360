import React, {useEffect} from 'react';
import Polls from "./Polls";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";
import {TPoll} from "../../../interfaces/Polls.types";
import {setPollsAC} from "../../../store/pools-reducer";
import useHttp from "../../../assets/hooks/http";

const PollsContainer = () => {
  const isIn: boolean = useSelector((state: ReducersType) => state.user.user.isIn);
  const pools: Array<TPoll> = useSelector((state: ReducersType) => state.pools.polls);
  const userId: number = useSelector((state: ReducersType) => state.user.user.info.id);
  const {request} = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    if(userId !== 0){
      request('/api/polls/', "POST", {userId}).then(res => {
        dispatch(setPollsAC(res));
      });
    }
  }, []);

  return(
    <Polls
      pools={pools}
      isIn={isIn}
    />
  )
}

export default PollsContainer;
import React, {useEffect} from 'react';
import Content from "./Contents";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/user-reducer";
import {initializedSuccess} from "../../store/app-reducer";
import {ReducersType} from "../../store/store";
import {setPollsAC} from "../../store/pools-reducer";
import useHttp from "../../assets/hooks/http";


const ContentContainer = () => {
  const {request} = useHttp();
  const userId = useSelector((state: ReducersType) => state.user.user.info.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    if (data && data.token) {
      dispatch(login(data.token, data.userInfo));
      dispatch(initializedSuccess());
    }
    initializedSuccess();
  }, []);

  useEffect(() => {
    if(userId !== 0){
      request('/api/polls/', "POST", {userId}).then(res => {
        dispatch(setPollsAC(res));
      });
    }
  }, [userId])

  const initialized: boolean = useSelector((state: ReducersType) => state.app.initialized);

  return(
    <Content
      initialized={initialized}
    />
  )
}

export default ContentContainer;
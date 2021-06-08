import React, {useEffect} from 'react';
import Content from "./Contents";
import {useDispatch} from "react-redux";
import {setToken, setUserInfoAC} from "../../store/user-reducer";


const ContentContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    console.log(data);
    if(data && data.token) {
      dispatch(setToken(data.token));
      dispatch(setUserInfoAC(data.userInfo));
    }
  })

  return(
    <Content />
  )
}

export default ContentContainer;
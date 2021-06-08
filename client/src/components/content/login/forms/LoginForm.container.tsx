import React from 'react';
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {login, setToken, setUser} from "../../../../store/user-reducer";
import useHttp from "../../../../assets/hooks/http";


const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const {error, request} = useHttp();
  const handlerSubmit = async (form) => {
    try{
      const data = await request('/api/auth/login', "POST", {...form});
      dispatch(setToken(data.token));
      dispatch(setUser(data.userInfo));
      localStorage.setItem("userInfo", JSON.stringify({
        userInfo: data.userInfo, token: data.token
      }));
    } catch (e) {

    }
    // console.log(data);
    // dispatch(login(data.email, data.password));
  }

  return(
    <LoginForm
      onSubmit={handlerSubmit}
    />
  )
}

export default LoginFormContainer;
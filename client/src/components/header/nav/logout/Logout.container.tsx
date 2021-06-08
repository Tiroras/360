import React from 'react';
import Logout from "./Logout";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../../store/user-reducer";
import {ReducersType} from "../../../../store/store";


const LogoutContainer = () => {
  const dispatch = useDispatch();
  const session = useSelector((state: ReducersType) => state.user.user.isIn)

  const handleClick = () => {
    dispatch(logout());
    console.log(session);
  }

  return(
    <Logout
      handleClick={handleClick}
    />
  )
}

export default LogoutContainer;
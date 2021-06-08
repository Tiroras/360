import React from 'react';
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";
import UserRouter from "./UserRouter";


const UserRouterContainer = () => {
  const session = useSelector((state: ReducersType) => state.user.user.isIn);
  return(
    <UserRouter session={session} />
  )
}

export default UserRouterContainer;
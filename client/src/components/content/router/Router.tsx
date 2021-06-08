import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";
import AdminRouter from "./AdminRouter";
import UserRouterContainer from "./UserRouter.container";


const Router = () => {
  const isAdmin: boolean = useSelector((state: ReducersType) => state.user.user.info.isAdmin);
  if(isAdmin){
    return <AdminRouter />
  }

  return <UserRouterContainer />
}

export default Router
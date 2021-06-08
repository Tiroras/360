import React from 'react';
import AdminPanel from "./AdminPanel";
import {useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import { Redirect } from 'react-router-dom';


const AdminPanelContainer = () => {
  const isAdmin = useSelector((state: ReducersType) => state.user.user.info.isAdmin);

  if(!isAdmin){
    return <Redirect to="/" />
  }

  return(
    <AdminPanel />
  )
}

export default AdminPanelContainer;
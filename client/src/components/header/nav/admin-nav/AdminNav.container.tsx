import React from 'react';
import AdminNav from "./AdminNav";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";


const AdminNavContainer = () => {
  const isAdmin: boolean = useSelector((state: ReducersType) => state.user.user.info.isAdmin);
  if(isAdmin){
    return(
      <AdminNav />
    )
  }
  return <></>
}

export default AdminNavContainer;
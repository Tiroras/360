import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../store/store";
import AdminCollapse from "./AdminCollapse";


const AdminCollapseContainer = () => {
  const isAdmin: boolean = useSelector((state: ReducersType) => state.user.user.info.isAdmin);
  const [open, setOpen] = useState(false);

  const setCollapse = () => {
    switch (open) {
      case true: setOpen(false); break;
      case false: setOpen(true); break;
      default: setOpen(false);
    }
  }

  if(isAdmin){
    return <AdminCollapse open={open} setCollapse={setCollapse} />
  }

  return(
    <></>
  )
}

export default AdminCollapseContainer;
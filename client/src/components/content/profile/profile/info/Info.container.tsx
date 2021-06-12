import React from 'react';
import Info from "./Info";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../../../store/store";



const InfoContainer = () => {
  const user = useSelector((state: ReducersType) => state.user.user.info);
  return(
    <Info
      name={user.login}
      position={user.user_position}
    />
  )
}

export default InfoContainer;
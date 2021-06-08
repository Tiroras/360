import React from 'react';
import FooterNav from "./FooterNav";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";


const FooterNavContainer = () =>{
  const isIn = useSelector((state: ReducersType) => state.user.user.isIn);
  return(
    <FooterNav
      isIn={isIn}
    />
  )
}

export default FooterNavContainer;
import React, {useEffect} from 'react';
import NavbarComp from "./Navbar";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";


const NavbarCompContainer = () => {
  const isIn = useSelector((state: ReducersType) => state.user.user.isIn);
  useEffect(() => {

  }, [isIn])
  return(
    <NavbarComp
      isIn={isIn}
    />
  )
}

export default NavbarCompContainer;
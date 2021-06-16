import React, {useEffect, useState} from 'react';
import NavbarComp from "./Navbar";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";


const NavbarCompContainer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isIn = useSelector((state: ReducersType) => state.user.user.isIn);

  const setCollapse = () => {
    switch (open) {
      case true: setOpen(false); break;
      case false: setOpen(true); break;
      default: setOpen(false);
    }
  }

  useEffect(() => {

  }, [isIn])

  return(
    <NavbarComp
      isIn={isIn}
      open={open}
      setCollapse={setCollapse}
    />
  )
}

export default NavbarCompContainer;
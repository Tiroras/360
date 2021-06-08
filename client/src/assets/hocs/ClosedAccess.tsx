import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import {Redirect} from "react-router-dom";


const withClosedAccess = (Component) => {
  const ClosedComponent = (props) => {
    const isAdmin = useSelector((state: ReducersType) => state.user.user.info.isAdmin);
    if(!isAdmin){
      return <Redirect to="/" />
    }

    return <Component {...props} />
  }

  return ClosedComponent;
}

export default withClosedAccess;
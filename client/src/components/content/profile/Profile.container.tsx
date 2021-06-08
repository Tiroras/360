import React from 'react';
import Profile from "./Profile";
import {useSelector} from "react-redux";
import {ReducersType} from "../../../store/store";


const ProfileContainer = () => {
  const havePolls = useSelector((state: ReducersType) => state.pools.polls.length);
  return(
    <Profile
      havePolls={havePolls}
    />
  )
}

export default ProfileContainer;


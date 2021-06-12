import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import PollsContainer from "../polls/Polls.container";
import Login from "../login/Login";
import PollContainer from "../polls/poll/Poll.container";
import ProfilePage from "../profile/ProfilePage";


interface IProps {
  session: boolean;
}

const UserRouter = (props: IProps) => {
  if(props.session){
    return(
      <Switch>
        <Route render={() => <Main /> } path='/' exact/>
        <Route render={() => <PollsContainer /> } path='/polls' exact/>
        <Route render={() => <PollContainer />} path={'/poll'} exact />
        <Route render={() => <ProfilePage /> } path='/profile' exact/>
        <Redirect to={"/"} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route render={() => <Main /> } path='/' exact/>
      <Route render={() => <PollsContainer /> } path='/polls' exact/>
      <Route render={() => <Login /> } path='/login' exact />
      <Redirect to={"/"} />
    </Switch>
  )
}

export default UserRouter;
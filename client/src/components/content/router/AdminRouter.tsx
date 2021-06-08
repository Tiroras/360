import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import PollsContainer from "../polls/Polls.container";
import Poll from "../polls/poll/Poll";
import ProfileContainer from "../profile/Profile.container";
import UsersContainer from "../../admin/users/Users.container";
import Registration from "../../admin/registration/Registr";



const AdminRouter = () => {
  return(
    <Switch>
      <Route render={() => <Main /> } path='/' exact/>
      <Route render={() => <PollsContainer /> } path='/polls' exact/>
      <Route render={() => <Poll />} path={'/poll/:pollId?'} />
      <Route render={() => <ProfileContainer /> } path='/profile' exact />
      <Route render={() => <Registration /> } path='/admin/registration' exact />
      <Route render={() => <UsersContainer /> } path='/admin/users' exact />
      <Redirect to={"/"} />
    </Switch>
  )
}

export default AdminRouter;
import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../main/Main";
import PollsContainer from "../polls/Polls.container";
import ProfileContainer from "../profile/Profile.container";
import UsersContainer from "../../admin/users/Users.container";
import Registration from "../../admin/registration/Registr";
import PollContainer from "../polls/poll/Poll.container";
import AdminPollsContainer from "../../admin/polls/Polls.container";
import AdminAddPollContainer from "../../admin/add-poll/AddPoll.container";
import AdminAddInterviewerContainer from "../../admin/add-interviewers/AdminAddInterviewer.container";


const AdminRouter = () => {
  return(
    <Switch>
      <Route render={() => <Main /> } path='/' exact/>
      <Route render={() => <PollsContainer /> } path='/polls' exact/>
      <Route render={() => <PollContainer />} path={'/poll/:pollId?'} />
      <Route render={() => <ProfileContainer /> } path='/profile' exact />
      <Route render={() => <Registration /> } path='/admin/registration' exact />
      <Route render={() => <UsersContainer /> } path='/admin/users' exact />
      <Route render={() => <AdminPollsContainer /> } path='/admin/polls' exact />
      <Route render={() => <AdminAddPollContainer /> } path='/admin/add-poll' exact />
      <Route render={() => <AdminAddInterviewerContainer /> } path='/admin/add-interviewer' exact />
      <Redirect to={"/"} />
    </Switch>
  )
}

export default AdminRouter;
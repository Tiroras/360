import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import ProfileContainer from "./profile/Profile.container";
import AppraisalContainer from "./appraisal/Appraisal.container";


const ProfilePage = () => {
  return(
    <div>
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="profile" title={"Профиль"}>
          <ProfileContainer />
        </Tab>
        <Tab eventKey="appraisal" title={"Оценки"}>
          <AppraisalContainer />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ProfilePage;
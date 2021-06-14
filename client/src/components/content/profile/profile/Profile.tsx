import React from 'react';
import InfoContainer from "./info/Info.container";
import {ListGroup} from "react-bootstrap";
import GoToPolls from "./go-to-polls/GoToPolls";
import classes from "./Profile.module.css";


interface IProps {
  havePolls: number;
}

const Profile = (props: IProps) => {
  return(
    <div className={`text-dark ${classes.profile}`}>
      <ListGroup>
        <ListGroup.Item>
          <InfoContainer />
        </ListGroup.Item>
        <ListGroup.Item>
          {props.havePolls ?
            <GoToPolls /> :
            <div>
              У вас нет опросов для дачи оценки
            </div>
          }
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Profile;
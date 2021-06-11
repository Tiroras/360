import React from 'react';
import {ListGroup, Card} from "react-bootstrap";
import {TPoll} from "../../../interfaces/Polls.types";
import classes from './Polls.module.css';
import PollMessage from "./PollMessage";
import PollLinkContainer from "./PollLink.container";


interface IProps {
  pools: TPoll[];
  isIn: boolean;
}

const Polls = (props: IProps) => {
  return (
    <Card>
      <Card.Header className="fw-bold s22">
        Список опросов для проведения оценки:
      </Card.Header>
      <Card.Body>
        {props.isIn ?
          <div className={classes.polls_container}>
            <ListGroup>
              {props.pools.map((prop: TPoll) => (
                <PollLinkContainer
                  key={prop.id}
                  id={prop.id}
                  inter_id={prop.inter_id}
                  user_name={prop.userInfo.user_name}
                  user_position={prop.userInfo.user_position}
                />
              ))}
            </ListGroup>
          </div>
          :
          <PollMessage />
        }
      </Card.Body>
    </Card>
  );
}

export default Polls;
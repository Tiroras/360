import React from 'react';
import {ListGroup} from "react-bootstrap";
import AdminPollItem from "./poll/Poll";


interface IPoll {
  id: number;
  appraisal_target_id: number;
  isOver: boolean;
  user_name: string;
  user_position: string;
  login: string;
  email: string;
}

interface IProps {
  polls: IPoll[];
}

const Polls = (props: IProps) => {
  return (
    <div>
      <div>
        <h3>Список опросов</h3>
      </div>
      <div>
        <ListGroup horizontal={'sm'}>
          <ListGroup.Item>id опроса</ListGroup.Item>
          <ListGroup.Item>id цели опроса</ListGroup.Item>
          <ListGroup.Item>Опрос закончен</ListGroup.Item>
          <ListGroup.Item>Имя цели опроса</ListGroup.Item>
          <ListGroup.Item>Должность цели опроса</ListGroup.Item>
          <ListGroup.Item>Логин цели опроса</ListGroup.Item>
          <ListGroup.Item>Почта цели опроса</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        {props.polls.map((poll: IPoll) => (
          <AdminPollItem
            id={poll.id}
            appraisal_target_id={poll.appraisal_target_id}
            isOver={poll.isOver}
            user_name={poll.user_name}
            user_position={poll.user_position}
            login={poll.login}
            email={poll.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Polls;
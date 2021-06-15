import React from 'react';
import {Table} from "react-bootstrap";
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
      <Table>
        <thead>
          <tr>
            <th>id опроса</th>
            <th>id цели опроса</th>
            <th>Опрос закончен</th>
            <th>Имя цели опроса</th>
            <th>Должность цели опроса</th>
            <th>Логин цели опроса</th>
            <th>Почта цели опроса</th>
          </tr>
        </thead>
        <tbody>
          {props.polls.map((poll: IPoll) => (
            <AdminPollItem
              key={poll.id}
              id={poll.id}
              appraisal_target_id={poll.appraisal_target_id}
              isOver={poll.isOver}
              user_name={poll.user_name}
              user_position={poll.user_position}
              login={poll.login}
              email={poll.email}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Polls;
import React from 'react';
import SelectPollListItem from "./SelectPollListItem";
import {Table} from "react-bootstrap";


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

const SelectPollList = (props: IProps) => {
  return(
    <Table>
      <tbody>
        {props.polls.map((poll: IPoll) => (
          <SelectPollListItem
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
  )
}

export default SelectPollList;
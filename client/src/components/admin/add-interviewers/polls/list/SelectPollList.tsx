import React from 'react';
import SelectPollListItem from "./SelectPollListItem";


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
    <div>
      <div>
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
      </div>
    </div>
  )
}

export default SelectPollList;
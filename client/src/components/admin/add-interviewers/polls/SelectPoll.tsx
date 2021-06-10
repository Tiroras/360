import React from 'react';
import SelectPollInput from "./form/SelectPollInput";
import SelectPollList from "./list/SelectPollList";


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
  input: string;
  polls: IPoll[];
  setInput: (input: string) => void;
}

const SelectPoll = (props: IProps) => {
  return(
    <div>
      <div>
        <SelectPollInput
          input={props.input}
          setInput={props.setInput}
        />
      </div>
      <div>
        <SelectPollList
          polls={props.polls}
        />
      </div>
    </div>
  )
}

export default SelectPoll;
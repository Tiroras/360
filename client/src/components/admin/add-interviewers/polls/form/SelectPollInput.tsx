import React, {ChangeEvent} from 'react';
import classes from "../SelectPoll.module.css";


interface IProps {
  input: string;
  setInput: (input: string) => void;
}

const SelectPollInput = (props: IProps) => {
  return(
    <div className={classes.input}>
      <input
        placeholder="Введите данные опроса"
        value={props.input}
        onChange={(data: ChangeEvent<HTMLInputElement>) => props.setInput(data.target.value)}
      />
    </div>
  )
}

export default SelectPollInput;
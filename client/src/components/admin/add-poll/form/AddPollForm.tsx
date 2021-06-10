import React, {ChangeEvent} from 'react';
import classes from "../AddPoll.module.css";


interface IProps {
  input: string;
  setInput: (value: string) => void;
  usersFilter: () => void;
  clearFilter: () => void;
}

const AddPollForm = (props: IProps) => {
  return(
    <div>
      <span className={classes.search}>
        <input
          placeholder={"Введите имя пользователя или его id"}
          value={props.input}
          onChange={(data: ChangeEvent<HTMLInputElement>) => props.setInput(data.target.value)}
        />
      </span>
      <span className={classes.filter}>
        <button onClick={props.usersFilter} className={"btn btn-warning"}>
          Отфильтровать
        </button>
      </span>
      <span className={classes.clearFilter}>
        <button onClick={props.clearFilter} className={"btn btn-warning"}>
          Отменить фильтрацию
        </button>
      </span>
    </div>
  )
}

export default AddPollForm;
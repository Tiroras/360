import React from 'react';
import {IUserInfo} from "../../../../interfaces/User.types";
import SelectInterviewersItem from "./SelectInterviewersItem";


interface IProps {
  users: IUserInfo[];
}

const SelectInterviewers = (props: IProps) => {
  return(
    <div>
      <div>
        {props.users.map((user: IUserInfo) => (
          <SelectInterviewersItem
            key={user.id}
            id={user.id}
            user_name={user.user_name}
            user_position={user.user_position}
            isAdmin={user.isAdmin}
            login={user.login}
            email={user.email}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectInterviewers;
import React from 'react';
import {IResult} from "../../../../interfaces/User.types";


const Competence = (props: IResult) => {
  return(
    <div>
      <span className="s18 bold">{props.competence.competence}: </span>
      <span>{props.result}</span>
    </div>
  )
}

export default Competence;
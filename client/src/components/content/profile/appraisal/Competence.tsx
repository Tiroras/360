import React from 'react';
import {ICompetence} from "../../../../interfaces/User.types";


const Competence = (props: ICompetence) => {
  return(
    <div>
      <span className="s34 bold">{props.competence}: </span>
      <span className="s22">{props.result}</span>
    </div>
  )
}

export default Competence;
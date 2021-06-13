import React from 'react';
import {ICompetence} from "../../../../interfaces/User.types";
import classes from "./Appraisal.module.css";


const Competence = (props: ICompetence) => {
  return(
    <div className={classes.competence}>
      <span className="s34 bold">{props.competence}: </span>
      <span className="s22">{props.result}</span>
    </div>
  )
}

export default Competence;
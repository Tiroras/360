import React from 'react';
import {ICompetence} from "../../../../interfaces/User.types";
import Competence from "./Competence";
import classes from "./Appraisal.module.css";


interface IProps {
  comptences: ICompetence[]
}

const Appraisal = (props: IProps) => {
  return(
    <div className={classes.competences}>
      {props.comptences.map((comp: ICompetence) => (
        <Competence
          key={comp.id}
          id={comp.id}
          competence={comp.competence}
          result={comp.result}
        />
      ))}
    </div>
  )
}

export default Appraisal;
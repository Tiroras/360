import React from 'react';
import {IResult} from "../../../../interfaces/User.types";
import Competence from "./Competence";


interface IProps {
  comptences: IResult[]
}

const Appraisal = (props: IProps) => {
  return(
    <div>
      {props.comptences.map((comp: IResult) => (
        <Competence
          key={comp.competence.id}
          competence={comp.competence}
          result={comp.result}
        />
      ))}
    </div>
  )
}

export default Appraisal;
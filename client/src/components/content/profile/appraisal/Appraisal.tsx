import React from 'react';
import {ICompetence} from "../../../../interfaces/User.types";
import Competence from "./Competence";
import classes from "./Appraisal.module.css";
import {Card} from "react-bootstrap";


interface IProps {
  comptences: ICompetence[]
}

const Appraisal = (props: IProps) => {
  return(
    <div className={classes.appraisal}>
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
      <Card className={`${classes.info} s22`}>
        <Card.Text className={classes.text}>
          Чем ближе параметр компетенции к единице, тем лучше вас оценивают в этой компетенции
        </Card.Text>
      </Card>
    </div>
  )
}

export default Appraisal;
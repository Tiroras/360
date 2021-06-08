import React from 'react';
import {ListGroup, Card} from "react-bootstrap";
import PoolLink from "./PoolLink";
import {TPoll} from "../../../interfaces/Polls.types";
import classes from './Polls.module.css';
import {setPollsAC} from "../../../store/pools-reducer";


interface IProps {
  pools: TPoll[];
}

const Polls = (props: IProps) => {
  return(
    <Card>
      <Card.Header className="fw-bold s22">
        Список опросов для проведения оценки:
      </Card.Header>
      <Card.Body>
        <div className={classes.polls_container}>
          <ListGroup>
            {props.pools.map((prop: TPoll) => (
              <PoolLink
                key={prop.id}
                id={prop.id}
                emp_name={prop.emp_name}
                emp_position={prop.emp_position}
              />
            ))}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Polls;
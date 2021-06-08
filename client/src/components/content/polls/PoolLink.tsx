import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import classes from "./PoolLink.module.css";
import {Link} from "react-router-dom";


interface IProps {
  id: number;
  emp_name: string;
  emp_position: string;
}

const PoolLink = (props: IProps) => {
  return(
    <ListGroupItem>
      <div className={classes.item}>
        <div className="text-dark">
          <span className="fw-bold">{props.emp_name}</span>
          &nbsp;
          <span>{props.emp_position}</span>
        </div>
        <div>
          <Link to={`/poll/${props.id}`}>
            <Button variant="warning">Перейти к опросу</Button>
          </Link>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default PoolLink;
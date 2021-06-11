import React from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import classes from "./PoolLink.module.css";
import {Link} from "react-router-dom";


interface IProps {
  id: number;
  user_name: string;
  user_position: string;
}

const PoolLink = (props: IProps) => {
  return(
    <ListGroupItem>
      <div className={classes.item}>
        <div className="text-dark">
          <span className="fw-bold">{props.user_name}</span>
          &nbsp;
          <span>{props.user_position}</span>
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
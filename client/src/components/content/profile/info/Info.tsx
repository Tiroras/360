import React from "react";
import {Col, Image} from "react-bootstrap";
import classes from './Info.module.css';
import image from './../../../../assets/images/user.png';


interface IProps {
  name: string;
  position: string;
}

const Info = (props: IProps) => {
  return(
    <div className={classes.block}>
      <div className={classes.profile}>
        <div>
          <Col>
            <Image roundedCircle src={image} width='100px' height='100px' />
          </Col>
        </div>
        <div className={classes.info}>
          <div className="fw-bold s22">{props.name}</div>
          <div className="s18">{props.position}</div>
        </div>
      </div>
    </div>
  )
}

export default Info;
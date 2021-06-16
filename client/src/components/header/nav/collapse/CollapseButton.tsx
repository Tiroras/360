import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import classes from "./Collapse.module.css";


interface IProps {
  setCollapse: any;
}

const CollapseButton = (props: IProps) => {
  return (
    <Nav className={`navbar bg-success text-white`}>
      <div className={"container-fluid"}>
          <button
            className={`${classes.button} btn btn-succes`}
            type={"button"}
            data-bs-toggle={"collapse"}
            data-bs-target={"#navbar"}
            onClick={props.setCollapse}
          >
            <div className={classes.collapse_button}>
              <span>——————</span>
              <span>——————</span>
              <span>——————</span>
            </div>
          </button>
        </div>
    </Nav>
  );
}

export default CollapseButton;
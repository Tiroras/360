import React from 'react';
import {Nav, Navbar, Collapse} from "react-bootstrap";
import classes from "./Collapse.module.css";
import {Link} from "react-router-dom";
import LogoutContainer from "../logout/Logout.container";
import AdminCollapseContainer from "./AdminCollapse.container";


interface IProps {
  isIn: boolean
  open: boolean;
}

const CollapseNavbar = (props: IProps) => {
  return (
    <Collapse in={props.open}>
      <Nav>
        <div>
          <Nav.Link>
            <Link to={"/"} className="text-light">
              Главная
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/polls"} className="text-light">
              Опросы
            </Link>
          </Nav.Link>
          {props.isIn ?
            <div className={classes.profile}>
              <Nav.Link>
                <Link to={"/profile"} className="text-light">
                  Профиль
                </Link>
              </Nav.Link>
              <LogoutContainer/>
            </div>
            :
            <Nav.Link>
              <Link to={"/login"} className="text-light">
                Войти
              </Link>
            </Nav.Link>
          }

          <AdminCollapseContainer />
        </div>
      </Nav>
    </Collapse>
  );
}

export default CollapseNavbar;
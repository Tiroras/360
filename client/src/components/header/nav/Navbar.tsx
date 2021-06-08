import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";
import LogoutContainer from "./logout/Logout.container";
import AdminNavContainer from "./admin-nav/AdminNav.container";


interface IProps {
  isIn: boolean;
}

const NavbarComp = (props: IProps) =>{
  return(
    <Navbar bg='success' variant="dark" className={classes.navbar}>
      <div className={classes.usernav}>
        <Navbar.Brand href="/">
          <Link to="/home" className="text-light">
            360
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
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
              <LogoutContainer />
            </div>
            :
            <Nav.Link>
              <Link to={"/login"} className="text-light">
                Войти
              </Link>
            </Nav.Link>
          }
        </Nav>
      </div>
      <Nav>
        <AdminNavContainer />
      </Nav>
    </Navbar>
  )
}

export default NavbarComp;
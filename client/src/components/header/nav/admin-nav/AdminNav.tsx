import React from 'react';
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";


const AdminNav = () => {
  return(
    <NavDropdown title="Панель администратора" id="admin-panel">
      <NavDropdown.Item>
        <Link to="/admin/registration">
          Добавить пользователя
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="/admin/users">
          Список пользователей
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="/admin/polls">
          Список опросов
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="/admin/add-poll">
          Выбрать цель опроса
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="/admin/add-interviewer">
          Выбрать проходящих опрос
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default AdminNav;
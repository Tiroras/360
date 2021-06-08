import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Menu = () =>{
  return(
    <Navbar bg='success' variant="dark">
      <Navbar.Brand href="/">360</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Главная</Nav.Link>
        <Nav.Link href="/polls">Опросы</Nav.Link>
        <Nav.Link href="/profile">Профиль</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Menu;
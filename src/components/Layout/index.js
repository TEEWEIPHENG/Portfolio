import React from 'react';
import './style.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import { introduction } from '../Data/data';

function Layout() {
  return (
    <Navbar expand="lg" className="navbar">
       <Container fluid>
        <Navbar.Brand className='navbar-brand' href="/Portfolio">{introduction.name}</Navbar.Brand>
        <Nav className="me-auto navbar-item-list">
          <NavLink className='navbar-item' to="/Portfolio" end>Home</NavLink >
          <NavLink className='navbar-item' to="/Portfolio/experiences" >Experiences</NavLink>
          <NavLink className='navbar-item' to="/Portfolio/projects" >Projects</NavLink >
          <NavLink className='navbar-item' to="/Portfolio/certificates" >Certificates</NavLink >
        </Nav>
       </Container>
    </Navbar>
  )
}

export default Layout

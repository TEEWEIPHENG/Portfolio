import React, { useEffect } from 'react';
import './style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { introduction } from '../Data/data';

function Layout() {
  return (
    <Navbar expand="lg" className="navbar sticky-top">
      <Container fluid>
        <Navbar.Brand className="navbar-brand" href="#home">{introduction.name}</Navbar.Brand>
        <Nav className="me-auto navbar-item-list">
          <Link
            className="navbar-item"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            Home
          </Link>
          <Link
            className="navbar-item"
            to="experiences"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            Experiences
          </Link>
          <Link
            className="navbar-item"
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            Projects
          </Link>
          <Link
            className="navbar-item"
            to="certificates"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            Certificates
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Layout;

import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './css/header.css';

function Header() {
    const [expand, setExpand] = useState('sm')
  return (
    <div>
        <Navbar key={expand} expand={expand} className="bg-light mb-3 travel-nav">
          <Container fluid>
            <Navbar.Brand href="#">Travel</Navbar.Brand>
            <Navbar.Toggle aria-controls={`travel-nav-id`} />
            <Navbar.Offcanvas
              id={`travel-nav-id`}
              aria-labelledby={`travel-nav-title`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`travel-nav-title`}>
                  Travel
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className='nav-link'>Home</NavLink>
                  <NavLink to="/about" className='nav-link'>About Us</NavLink>
                  <NavLink to="/destination" className='nav-link'>Destinations</NavLink>
                  <NavLink to="/contact" className='nav-link'>Contact Us</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header
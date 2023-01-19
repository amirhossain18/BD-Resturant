import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='text-center' bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand className='color-red text-center' to="#">BD Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
        
           
            <Nav  className="me-auto my-2 my-lg-0" 
            
            >
              <NavLink className="item" to="/home">Home</NavLink>
              <NavLink className="item" to="/about">About</NavLink>
              <NavLink className="item" to="/count">Count</NavLink>
              <NavLink className="item" to="#" >
                Blog
              </NavLink>
            
            </Nav>
            <Form   className=" d-flex"
              style={{ maxHeight: '100px' }}
              navbarScroll >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
              <Button variant="outline-light">
                <NavLink to="login">Login</NavLink>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
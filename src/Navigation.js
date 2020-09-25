import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


function Navigation() {
    const [key, setKey] = useState('/');
    return (
      <Navbar collapseOnSelect expand="lg"  bg="light" variant="light" defaultActiveKey={key} onSelect={(e) => setKey(e)}>
        <Navbar.Brand>
            <Nav.Link as={Link} to="/" eventKey="/"><FontAwesomeIcon icon={faHome} /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav.Item className={key === "/webdev" ? 'nav-item active' : 'nav-item'} >
                <Nav.Link as={Link} to="/webdev" eventKey="/webdev">WEB DEVELOPMENT</Nav.Link>
            </Nav.Item>
            <Nav.Item className={key === "/e-commerce" ? 'nav-item active' : 'nav-item'}>
                <Nav.Link as={Link} to="/e-commerce" eventKey="/e-commerce">E-COMMERCE</Nav.Link>
            </Nav.Item>
            <Nav.Item className={key === "/photography" ? 'nav-item active' : 'nav-item'}>
                <Nav.Link as={Link} to="/photography" eventKey="/photography">PHOTOGRAPHY</Nav.Link>
            </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  export default Navigation;
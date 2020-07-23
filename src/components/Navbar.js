import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css'


const Navb = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" id='navDiv'>
                    <Nav.Link className='nav-link' as={Link} to="/">Accueil</Nav.Link>
                    <Nav.Link className='nav-link' as={Link} to="/cv">CV</Nav.Link>
                    <Nav.Link className='nav-link' as={Link} to="/projets">Projets</Nav.Link>
                    <Nav.Link className='nav-link' as={Link} to="/interets">Centres d'intérêt</Nav.Link>
                    <Nav.Link className='nav-link' as={Link} to="/contact">Contact</Nav.Link>

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>   
    )
}

export default Navb;
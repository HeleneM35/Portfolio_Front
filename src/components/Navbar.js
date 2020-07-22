import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Navb = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navDiv'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" id='navDiv'>
                    <Nav.Link id='nav-link' as={Link} to="/">Accueil</Nav.Link>
                    <Nav.Link as={Link} to="/cv">CV</Nav.Link>
                    <Nav.Link as={Link} to="/projets">Projets</Nav.Link>
                    <Nav.Link as={Link} to="/interets">Centres d'intérêt</Nav.Link>

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
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './Navigation.css';

const Navigation = () => {
    return(
        <header className="bg-light">
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Mael Landrin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="ml-navbar" />
                    <Navbar.Collapse id="ml-navbar">
                        <Nav>
                            <Nav.Link href="#aboutScroll" className="animated infinite pulse">About</Nav.Link>
                            <Nav.Link href="#experienceScroll" className="animated infinite pulse">Portfolio</Nav.Link>
                            <Nav.Link href="#skillScroll" className="animated infinite pulse">Skills</Nav.Link>
                            <Nav.Link href="#link" className="animated infinite pulse">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Navigation;
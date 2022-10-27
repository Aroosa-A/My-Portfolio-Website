import React from "react";
import '../css/Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar className="navbar fixed-top navbar-dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Aroosa Bano Ahmed</Navbar.Brand>
                    <Nav id="link">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}



export default Header;
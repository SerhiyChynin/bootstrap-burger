
import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>WEB SOURCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><NavLink to="/"> Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/users">Users</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Fog In</Button>
                        <Button variant="primary">Fog Out</Button>
                    </Nav>

                </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}
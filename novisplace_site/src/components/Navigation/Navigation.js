import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../noviStyle.css";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="noviNav" variant="dark" expand="sm" fixed="top">
                    <Navbar.Brand >
                        <Link className="navbar-brand" to="./"> Novi's Place </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="./about">About Us</Nav.Link>
                            <Nav.Link href="./rules">Rules</Nav.Link>
                            <Nav.Link href="./members">Members</Nav.Link>
                            <Nav.Link href="./gallery">Gallery</Nav.Link>
                            <Nav.Link href="./events">Events</Nav.Link>
                            <Nav.Link href="./login">Admin Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Navigation;

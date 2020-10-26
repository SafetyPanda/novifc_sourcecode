import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./noviStyle.css"

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="noviNav" variant="dark" expand="sm" fixed="top">
                    <Navbar.Brand >
                        <Link className="navbar-brand" to="./"> Novi's Place </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="./about">About Us</Link></Nav.Link>
                            <Nav.Link>Rules</Nav.Link>
                            <Nav.Link>Members</Nav.Link>
                            <Nav.Link>Gallery</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Navigation;


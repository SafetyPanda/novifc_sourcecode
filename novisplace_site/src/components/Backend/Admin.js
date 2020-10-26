import React, { Component } from "react";
import {Button,Form} from "react-bootstrap";
import Backend from "./Backend";
import {Outlet, Link} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css";
import "../noviStyle.css";


export default class Admin extends Component {
    render() {
        return (
          <div>
            <div className="login"></div>  
            <div className="bg-text">
              <h1>Admin Login</h1>
              <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="Username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="uniBtn" type="submit" href="/backend">
                  Login
                </Button>               
                </Form>
                
          </div>
          <Outlet />
          </div>    
        );
    }
}
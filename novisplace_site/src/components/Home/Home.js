import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css";
import "../noviStyle.css";

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="home"></div>
            <div className="bg-text">
              <h1>Welcome To Novi's Place!</h1>
                <Row className="justify-content-center">
                    <Link to="./about"><Button className="uniBtn" variant="primary" >About Us</Button></Link>
                </Row>
            </div>
          </div>     
        );
      }
}

import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./noviStyle.css"

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="bg1"></div>
            <div class="bg-text">
              <h1>Welcome To Novi's Place!</h1>
            </div>
          </div>     
        );
      }
}

export default Home;
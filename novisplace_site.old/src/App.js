import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "./js/components/noviStyle.css";

import Navigation from './js/components/Navigation';
import Home from './js/components/Home';
import AboutPage from './js/components/About';
import Switches from './js/components/Switches';

class App extends Component {
    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </Router>
        );
      }
}

export default App;
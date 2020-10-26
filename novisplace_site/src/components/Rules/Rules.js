import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../noviStyle.css";

export default class About extends Component {
    render() {
        return (
          <div>
            <div className="rules"></div>  
            <div class="bg-text">
              <h1>Rules</h1>
              {this.policyText()}
            </div>
          </div>     
        );
    }

    policyText(){
        return(
          <p>
            <ol>
              <li>Do not put down/hurt/discriminate other players with the intent of harm.</li>
              <li>Be inclusive.</li>
              <li>Don't argue. Feel free to ask to change conversation topic and feel free to refer to this rule.</li>
              <li>Have fun!!</li>
              <li>Take any political discussion with a grain of salt. Feel free to refer rule 3 if chat gets heated.</li>
              <li>60 day inactivity will result in kick from the free company. This is simply to keep our roster fresh, alive, and active.</li>
            </ol>
          </p>
        );
    }
}
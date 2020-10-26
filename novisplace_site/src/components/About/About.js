import React, { Component } from "react";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../noviStyle.css";

export default class About extends Component {
    render() {
        return (
          <div>
            <div className="about"></div>  
            <div class="bg-text">
              <h1>Who We Are</h1>
              <p>Founded in February of 2020, Novi is an adventurer's haven. Quench your thirst at the FC campfire located in scenic Kugani. Group up with other player character's waiting to party up in voice chat and slap some monsters. Earn extra EXP and find faster queues with other FC Members! We welcome everyone regardless of skill level!</p>
              {this.renderDiscordButton()}
            </div>
          </div>     
        );
    }

    renderDiscordButton() {
        return(
          <Button className="uniBtn" variant="primary" onClick={() => this.openDiscordInv()}>Join Us On Discord!</Button>
        );
    }

    openDiscordInv() {
        window.open("https://discord.gg/ZDgkCmn");
    }
}
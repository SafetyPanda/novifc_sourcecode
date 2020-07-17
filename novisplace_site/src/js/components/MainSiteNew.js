import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';
import { Navbar, Nav, Col, Accordion, Container, Row, Jumbotron, Button, Image, Modal, Carousel, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./noviStyle.css"

class MainSite extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showMemb: false,
      showCal: false,
      showRules: false,
      setShow: false,

      showMaster: false,
      showLord: false,
      showMentor: false,
      showOfficer: false,
      showMember: false,
      showGuest: false,

      setOpenPics: false,
      url: "https://discord.gg/ZDgkCmn"
    };
  }

  //
  // MAIN
  //

  render() {
    return (
      <div>
                {this.renderNavBar()}
                {this.renderFirstSection()}
      </div>     
    );
  }


  //
  // Nav Bar
  //

  renderNavBar() {
    return(
      <Navbar className="noviNav" variant="dark" expand="sm" fixed="top">
            <Navbar.Brand>
                Novi's Place
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Who We Are</Nav.Link>
                        <Nav.Link href="#members">Members</Nav.Link>
                        <Nav.Link href="#link">Policies</Nav.Link>
                        <Nav.Link href="#home">Gallery</Nav.Link>
                        <Nav.Link href="#link">Join Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>         
        </Navbar>
    );
  }

  //
  // 1st Section Code //
  //

  renderFirstSection() {
      return(
        <div className="home-conent">
            <div className="homeBG"></div>
            <Row>
                <Col classname="col-md-8 offset-md-2 text">
                    <h1 className="wow fadeInLeftBig">Welcome To Novi's Place</h1>
                    <div className="description wow fadeInLeftBig">
                        <p>
                            TESTTESTTEST
                        </p>
                    </div>
                    <div className="home-big-link wow fadeInUp">
                        <a class="btn btn-primary btn-link-1" href={this.state.url}>Join Us</a>
                        <a class="btn btn-primary btn-link-2 scroll-link" href="#WhoWeAre">Learn more</a>
                    </div>
                </Col>
            </Row>
            
        </div>
      );
  }

  //
  // 2nd Section Code //
  //

  renderSecondSection() {
    return(
        <section>
            <div className="bg2"></div>
            <div class="bg-text">
                <h1>What We Are About</h1>
            </div>

        </section>
    );
    }

    //
    // Third Section
    //

    renderThirdSection() {
        return(
            <section>
                <div className="bg3"></div>
                <div class="bg-text">
                    <h1>Members</h1>
                </div>
    
            </section>
        );
        }
}
export default MainSite;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MainSite />, wrapper) : false;
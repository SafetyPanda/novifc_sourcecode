import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, Container, Row, Jumbotron, Button, Image, Modal, Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./noviStyle.css"

class MainSite extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showMemb: false,
      showCal: false,
      setShow: false,

      showMaster: false,
      showTribune: false,
      showChad: false,
      showOfficer: false,
      showMember: false,

      setOpenPics: false,
      url: "https://discord.gg/ZDgkCmn"
    };

}
  
  
  // HANDLERS.. TO BE CLEANED LATER //
  handleOpenMaster = () => {
      this.setState({showMaster: !this.state.showMaster});
  }

  handleOpenTribune = () => {
    this.setState({showTribune: !this.state.showTribune});
  }

  handleOpenChad = () => {
    this.setState({showChad: !this.state.showChad});
  }

  handleOpenOfficer = () => {
    this.setState({showOfficer: !this.state.showOfficer});
  }

  handleOpenMember = () => {
    this.setState({showMember: !this.state.showMember});
  }

  //JOIN US
  handleJoinOpen = () => {
    this.setState({show: true});
  }

  handleJoinClose = () => {
    this.setState({show: false});
  }

  //CALENDAR
  handleCalOpen = () => {
    this.setState({showCal: true});
  }

  handleCalClose = () => {
    this.setState({showCal: false});
  }

  //MEMBERS
  handleMembOpen = () => {
    this.setState({showMemb: true});
  }

  handleMembClose = () => {
    this.setState({showMemb: false});
  }

  render() {
    return (
      <div>
      <Row>
        {this.renderNavBar()}
        {this.openCalModal()}
        {this.openMembModal()} 
      </Row>
      <Container className={"container"} fluid> 
          {this.renderWelcomeBox()}
          {this.openJoinUsModal()}  
      </Container> 
      </div>      
    );
  }

  renderNavBar() {
    return(
      <Navbar  className="noviNav" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>Novi's Place</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={this.handleMembOpen}>Members</Nav.Link>
              <Nav.Link onClick={this.handleCalOpen}>FC Schedule</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }

  //////////////////
  // WELCOME CODE //
  //////////////////

  renderWelcomeBox() {
    return(
      <Jumbotron className="noviJumbo">
          <h1>Welcome To Novi's Place!</h1>
          <Image src="images/groupFC.png" fluid />
          <Row className="jumboRow">
            {this.introText()}
          </Row>
          <Button className="uniBtn" variant="primary" onClick={this.handleJoinOpen}>Join Us On Discord!</Button>
        </Jumbotron>
    );
  }

  introText(){
    return(
      <p>
          We are a small but growing Free Company in Faerie with an active and friendly community atmosphere. 
          With members from newcomers to veterans, casual players to hardcore endgame raiders we are sure to fill any need you want from a Free Company!
      </p>
    );
  }
 
  openJoinUsModal() {
    if(this.state.show == true) {
      return (
        <div>
          <Modal show={this.state.show} onHide={this.handleJoinClose} size="sm">
            <Modal.Body className="noviModalHead">
                {this.renderDiscordButton()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  renderDiscordButton() {
    return(
      <Button className="discordBtn" id="discBtn" onClick={() => this.openDiscordInv()}>
          <Image className={"discordImage"} src="images/discord.png" fluid/>
      </Button>
    )
  }

  openDiscordInv() {
    window.open(this.state.url);
  }

  

  ///////////////////
  // CALENDAR CODE //
  ///////////////////

  openCalModal() {
    if(this.state.showCal == true) {
      return (
        <div>
          <Modal show={this.state.showCal} onHide={this.handleCalClose} size="lg">
            <Modal.Header className="noviModalHead">FC Calendar</Modal.Header>
            <Modal.Body className="noviModal">
                We're working vewy hawd. :3
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  /////////////////////////
  // MEMBER GALLERY CODE //
  /////////////////////////

  openMembModal() {
    if(this.state.showMemb == true) {
      return (
        <div>
          <Modal show={this.state.showMemb} onHide={this.handleMembClose} size="xl">
            <Modal.Header className="noviModalHead" closeButton>Our Current Members!</Modal.Header>
            <Modal.Body className="noviModal">
              <h2>Select a Rank:</h2>
                {this.renderButtonMaster()}
                {this.renderButtonTribune()}
                {this.renderButtonChad()}
                {this.renderButtonOfficer()}
                {this.renderButtonMember()}
                {this.openMasterModal()}
                {this.openTribuneModal()}
                {this.openChadModal()}
                {this.openOfficerModal()}
                {this.openMemberModal()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  renderButtonMaster() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenMaster}>
            Master
        </Button>
      </div>
    );
  }

  renderButtonTribune() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenTribune}>
            Tribune
        </Button>
      </div>
    );
  }

  renderButtonChad() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenChad}>
            Giga Chad
        </Button>
      </div>
    );
  }

  renderButtonOfficer() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenOfficer}>
            M'Officer
        </Button>
      </div>
    );
  }

  renderButtonMember() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenMember}>
            Member
        </Button>
      </div>
    );
  }

  openMasterModal() {
      if(this.state.showMaster == true) {
        return (
          <div>
            <Modal show={this.state.showMaster} onHide={this.handleOpenMaster} size="xl">
            <Modal.Header className="galleryHead" closeButton>Master</Modal.Header>
              <Modal.Body className="galleryBody">
                  {this.renderMasterBox()}
              </Modal.Body>
            </Modal>
          </div>
        );
      }
  }

  openTribuneModal() {
    if(this.state.showTribune == true) {
      return (
        <div>
          <Modal show={this.state.showTribune} onHide={this.handleOpenTribune} size="xl">
          <Modal.Header className="galleryHead" closeButton>Tribunes</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderTribuneBox()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  openChadModal() {
    if(this.state.showChad == true) {
      return (
        <div>
          <Modal show={this.state.showChad} onHide={this.handleOpenChad} size="xl">
          <Modal.Header className="galleryHead" closeButton>Giga-Chads</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderChadBox()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  openOfficerModal() {
    if(this.state.showOfficer == true) {
      return (
        <div>
          <Modal show={this.state.showOfficer} onHide={this.handleOpenOfficer} size="xl">
          <Modal.Header className="galleryHead" closeButton>M'Officers</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderOfficerBox()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  openMemberModal() {
    if(this.state.showMember == true) {
      return (
        <div>
          <Modal show={this.state.showMember} onHide={this.handleOpenMember} size="xl">
          <Modal.Header className="galleryHead" closeButton>Members</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderMemberBox()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  ////////////////////////////////////////////////////
  // Jumbotron and Carousel for Member Pics Section //
  ////////////////////////////////////////////////////

  renderMasterBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container>
          <Carousel>
          {this.tokoroPic()}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderTribuneBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
            {this.umiPic()}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderChadBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
            {this.foxPic()}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderOfficerBox() {
    return(
      <Jumbotron className="galleryJumbo">
          <Carousel>
          {this.deliaPic()}
          {this.owiePic()}
          {this.erzaPic()}
          {this.novinaPic()}
          </Carousel>
        </Jumbotron>
    );
  }

  renderMemberBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
          {this.yuriPic()}
          {this.elemirPic()}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }


  //////////////////////////
  // MEMBERS PICS SECTION //
  //////////////////////////
  
  tokoroPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/tokoro.png"
          alt="Tokoro Grey"
        />
        <Carousel.Caption>
          <p className="galleryP">Tokoro Grey</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  umiPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/umi.png"
          alt="Umi Rhalden"
        />
        <Carousel.Caption>
          <p className="galleryP">Umi Rhalden</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  deliaPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/delia.png"
          alt="Delia Amaris"
        />
        <Carousel.Caption>
          <p className="galleryP">Delia Amaris</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  owiePic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/owie.jpg"
          alt="Owie Kapowie"
        />
        <Carousel.Caption>
            <p className="galleryP">Owie Kapowie</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  novinaPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/novina.png"
          alt="Novina Blossom"
        />
        <Carousel.Caption>
          <p className="galleryP">Novina Blossom</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  erzaPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/erza.jpg"
          alt="Erza Rainteau"
        />
        <Carousel.Caption>
          <p className="galleryP">Erza Rainteau</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  yuriPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/yuri.png"
          alt="Y'uri Tia"
        />
        <Carousel.Caption>
          <p className="galleryP">Y'uri Tia</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  elemirPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/elemir.png"
          alt="Elemir Nightfang"
        />
        <Carousel.Caption>
          <p className="galleryP">Elemir Nightfang</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  foxPic() {
    return(
      <Carousel.Item>
        <img
          src="images/fox.png"
          alt="Fox"
        />
        <Carousel.Caption>
          <p className="galleryP">Fox</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  templateMemberPic() {
    return(
      <Carousel.Item>
        <img
          src="INSERT IMAGE HERE"
          alt="MEMBER NAME HERE"
        />
        <Carousel.Caption>
          <p className="galleryP">Member Name Here</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

}
export default MainSite;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MainSite />, wrapper) : false;
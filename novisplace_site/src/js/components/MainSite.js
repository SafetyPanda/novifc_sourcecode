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
      showLord: false,
      showMentor: false,
      showOfficer: false,
      showMember: false,
      showGuest: false,

      setOpenPics: false,
      url: "https://discord.gg/ZDgkCmn"
    };
  }
  
  // HANDLERS.. TO BE CLEANED LATER //
  handleOpenMaster = () => {
      this.setState({showMaster: !this.state.showMaster});
  }

  handleOpenLord = () => {
    this.setState({showLord: !this.state.showLord});
  }

  handleOpenMentor = () => {
    this.setState({showMentor: !this.state.showMentor});
  }

  handleOpenOfficer = () => {
    this.setState({showOfficer: !this.state.showOfficer});
  }

  handleOpenMember = () => {
    this.setState({showMember: !this.state.showMember});
  }

  handleOpenGuest = () => {
    this.setState({showGuest: !this.state.showGuest});
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
          <Navbar.Brand>
          Novi's Place</Navbar.Brand>
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
          <Container>
            <Carousel>
              <Carousel.Item> <img src="images/group_photos/group1.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group2.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group3.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group4.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group5.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group6.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group7.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group8.jpg"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group9.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group10.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group11.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group12.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group13.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group14.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group15.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group16.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group17.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group18.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group19.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group20.png"/> </Carousel.Item>
            </Carousel>
          </Container>
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
                {this.renderButtonLord()}
                {this.renderButtonMentor()}
                {this.renderButtonOfficer()}
                {this.renderButtonMember()}
                {this.renderButtonGuest()}
                {this.openMasterModal()}
                {this.openLordModal()}
                {this.openMentorModal()}
                {this.openOfficerModal()}
                {this.openMemberModal()}
                {this.openHonGuestModal()}
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

  renderButtonLord() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenLord}>
            Lord
        </Button>
      </div>
    );
  }

  renderButtonMentor() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenMentor}>
            Mentor
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

  renderButtonGuest() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenGuest}>
            Honorary Guest
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

  openLordModal() {
    if(this.state.showLord == true) {
      return (
        <div>
          <Modal show={this.state.showLord} onHide={this.handleOpenLord} size="xl">
          <Modal.Header className="galleryHead" closeButton>Lords</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderLordBox()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  openMentorModal() {
    if(this.state.showMentor == true) {
      return (
        <div>
          <Modal show={this.state.showMentor} onHide={this.handleOpenMentor} size="xl">
          <Modal.Header className="galleryHead" closeButton>Mentors</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderMentorBox()}
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
          <Modal.Header className="galleryHead" closeButton>Officers</Modal.Header>
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

  openHonGuestModal() {
    if(this.state.showGuest == true) {
      return (
        <div>
          <Modal show={this.state.showGuest} onHide={this.handleOpenGuest} size="xl">
          <Modal.Header className="galleryHead" closeButton>Honorary Guest</Modal.Header>
            <Modal.Body className="galleryBody">
                {this.renderHonGuestBox()}
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

  renderLordBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
            {this.foxPic()}
            {this.fryPic()}
            {this.umiPic()} 
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderMentorBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
          {this.erzaPic()}
          {this.jenniePic()}
          {this.leprosyPic()}
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
          {this.novinaPic()}
          {this.reiPic()}
          </Carousel>
        </Jumbotron>
    );
  }

  renderMemberBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
          {this.elemirPic()}
          {this.yomogiPic()}
          {this.ellaPic()}
          {this.velvetPic()}
          {this.kryszaPic()}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderHonGuestBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
            {this.laliahPic()}
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
          alt="Dumpster Potato"
        />
        <Carousel.Caption>
          <p className="galleryP">Dumpster Potato</p>
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
          src="images/member_photos/erza.png"
          alt="Erza Rainteau"
        />
        <Carousel.Caption>
          <p className="galleryP">Erza Rainteau</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
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
          src="images/member_photos/fox.png"
          alt="Fox"
        />
        <Carousel.Caption>
          <p className="galleryP">Fox</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  jenniePic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/jennie.png"
          alt="Jennie Johansson"
        />
        <Carousel.Caption>
          <p className="galleryP">Jennie Johansson</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  leprosyPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/leprosy.png"
          alt="Leprosy Hansen"
        />
        <Carousel.Caption>
          <p className="galleryP">Leprosy Hansen</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  reiPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/rei.png"
          alt="Rei Kusinagi"
        />
        <Carousel.Caption>
          <p className="galleryP">Rei Kusinagi</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  yomogiPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/yomogi.jpg"
          alt="Yomogi Ando"
        />
        <Carousel.Caption>
          <p className="galleryP">Yomogi Ando</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  fryPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/fry.png"
          alt="Fry Bear"
        />
        <Carousel.Caption>
          <p className="galleryP">Fry Bear</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  kryszaPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/krysza.png"
          alt="Krysza Darthe"
        />
        <Carousel.Caption>
          <p className="galleryP">Krysza Darthe</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  laliahPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/laliah.png"
          alt="Laliah Sunsworn"
        />
        <Carousel.Caption>
          <p className="galleryP">Laliah Sunsworn</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  ellaPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/ella.png"
          alt="Ella Bloode"
        />
        <Carousel.Caption>
          <p className="galleryP">Ella Bloode</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  velvetPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/velvet.png"
          alt="Velvet Crowekiller"
        />
        <Carousel.Caption>
          <p className="galleryP">Velvet Crowekiller</p>
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


  ////////////////////////
  // GROUP PICS SECTION //
  ////////////////////////

  groupPic1() {
    return(
      <Carousel.Item>
        <img
          src="images/group_photos/group1.png"
          alt="Group 1"
        />
      </Carousel.Item>
    );
  }

}
export default MainSite;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MainSite />, wrapper) : false;
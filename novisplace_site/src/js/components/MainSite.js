import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, Accordion, Container, Row, Jumbotron, Button, Image, Modal, Carousel, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./noviStyle.css"

class MainSite extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      showMemb: false,
      showGal: false,
      showRules: false,
      setShow: false,

      showMaster: false,
      showLord: false,
      showMentor: false,
      showOfficer: false,
      showMember: false,
      showGuest: false,

      setOpenPics: false,
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

  //GALLERY
  handleGalOpen = () => {
    this.setState({showGal: true});
  }

  handleGalClose = () => {
    this.setState({showGal: false});
  }

  //MEMBERS
  handleMembOpen = () => {
    this.setState({showMemb: true});
  }

  handleMembClose = () => {
    this.setState({showMemb: false});
  }

  //Policies
  handleRulesOpen = () => {
    this.setState({showRules: true});
  }

  handleRulesClose = () => {
    this.setState({showRules: false});
  }

  render() {
    return (
      <div>
        <div className="bg1"></div>
        <div class="bg-text">
          <h1>Welcome To Novi's Place!</h1>
          {this.renderCardWelcome()}
        </div>
        <Row>
          {this.renderNavBar()}
          {this.openMembModal()} 
          {this.openRulesModal()}
          {this.openJoinUsModal()}
          {this.openGalModal()}
      </Row>
      </div>     
    );
  }
  /////////////////
  // HEADER CODE //
  /////////////////

  renderNavBar() {
    return(
      <Navbar className="noviNav" variant="dark" expand="sm" fixed="top">
          
            <Navbar.Brand>  
                Novi's Place
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button className="cardBtn" variant="primary" onClick={() => this.openDiscordInv()} >
                <Image 
                  src="images/discord.svg"
                  style={{
                    width: 30,
                    height: 30
                  }}
                  />
              </Button>
            </Navbar.Collapse>
            
        </Navbar>
    );
  }

  //////////////////
  // WELCOME CODE //
  //////////////////
  
  renderCardWelcome() {
    return(
      <Container>
            <Accordion defaultActiveKey="0">
            <div>
            <div>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Who We Are
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="1">
            <Row className="justify-content-center">
          
              <Button className="uniBtn" variant="primary" onClick={() => this.handleJoinOpen()}>About Us</Button>
              <Button className="uniBtn" variant="primary" onClick={() => this.handleMembOpen()}>Members</Button>
              <Button className="uniBtn" variant="primary" onClick={() => this.handleRulesOpen()}>Policies</Button>
              <Button className="uniBtn" variant="primary" onClick={() => this.handleGalOpen()}>Gallery</Button>
         
          </Row>
            </Accordion.Collapse>
            </div>
            </Accordion>
          
          </Container>
    );
  }

  ///////////////////
  // ABOUT US CODE //
  ///////////////////

  introText(){
    return(
      <p>
          Founded in February of 2020, Novi is an adventurer's haven. Quench your thirst at the FC campfire. Group up with other player character's waiting to party up in voice chat and slap some monsters. Earn extra EXP and find faster queues with other FC Members!
      </p>
    );
  }

  openJoinUsModal() {
    if(this.state.show == true) {
      return (
        <div>
          <Modal show={this.state.show} onHide={this.handleJoinClose}>
            <Modal.Header className="noviModalHead" closeButton>About Us</Modal.Header>
            <Modal.Body className="noviModalHead">
                {this.introText()}
                {this.renderDiscordButton()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  renderDiscordButton() {
    return(
      <Button className="uniBtn" variant="primary" onClick={() => this.openDiscordInv()}>Join Us On Discord!</Button>
    )
  }

  openDiscordInv() {
    window.open("https://discord.gg/ZDgkCmn");
  }

  //////////////////
  // GALLERY CODE //
  //////////////////

  openGalModal() {
    if(this.state.showGal == true) {
      return (
        <div>
          <Modal show={this.state.showGal} onHide={this.handleGalClose} size="lg">
            <Modal.Header className="noviModalHead " closeButton>Gallery</Modal.Header>
            <Modal.Body className="noviModal">
                {this.renderGallery()}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }

  renderGallery() {
    return(
      <Jumbotron className="galleryJumbo">
          <Container>
            <Carousel>
              <Carousel.Item> <img src="images/group_photos/group1.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group2.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group3.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group4.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group5.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group6.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group7.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group9.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group10.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group11.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group12.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group13.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group14.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group15.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group16.jpg"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group17.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group18.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group19.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group20.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group21.jpg"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group22.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group23.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group24.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group25.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group26.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group27.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group28.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group29.png"/> </Carousel.Item>
              <Carousel.Item> <img src="images/group_photos/group30.jpg"/> </Carousel.Item>
            </Carousel>
          </Container>
        </Jumbotron>
    );
  }

  ///////////////////
  // POLICIES CODE //
  ///////////////////

  openRulesModal() {
    if(this.state.showRules == true) {
      return (
        <div>
          <Modal show={this.state.showRules} onHide={this.handleRulesClose} size="lg">
            <Modal.Header className="noviModalHead" closeButton>Rules and Policies</Modal.Header>
            <Modal.Body className="noviModal">
                {this.policyText()}
                <Button className="uniBtn" onClick={()=> window.open("https://forms.gle/FZfG7GYkpiANfnue9", "GoogleForm")}>Accept Rules</Button>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
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
          <li>60 day inactivity will result in kick from the guild. This is simply to keep our roster fresh, alive, and active.</li>
        </ol>
        If you are not joining Discord, you must accept the policies using link below!
      </p>
    );
  }

  /////////////////////////
  // MEMBER GALLERY CODE //
  /////////////////////////

  openMembModal() {
    if(this.state.showMemb == true) {
      return (
        <div>
          <Modal show={this.state.showMemb} onHide={this.handleMembClose} size="lg">
            <Modal.Header className="noviModalHead" closeButton>Our Current Members!</Modal.Header>
            <Modal.Body className="noviModal">
                {this.renderButtonMaster()}
                {this.renderButtonLord()}
                {this.renderButtonOfficer()}
                {this.renderButtonMentor()}
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
            Overlord
        </Button>
      </div>
    );
  }

  renderButtonLord() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenLord}>
            Lords
        </Button>
      </div>
    );
  }

  renderButtonOfficer() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenOfficer}>
            Officers
        </Button>
      </div>
    );
  }

  renderButtonMentor() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenMentor}>
            Rangers
        </Button>
      </div>
    );
  }

  renderButtonMember() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenMember}>
            Members
        </Button>
      </div>
    );
  }

  renderButtonGuest() {
    return(
      <div>
        <Button className="uniBtn" onClick={this.handleOpenGuest}>
            Honorary Guests
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
                {this.renderRangerBox()}
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
          <Modal.Header className="galleryHead" closeButton>Honorary Guests</Modal.Header>
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
            {this.erzaPic()}
            {this.leprosyPic()}
            {this.deliaPic()}
            {/*{this.templateMemberPic()}*/}
          </Carousel>
        </Container>
        </Jumbotron>
    );
  }

  renderOfficerBox() {
    return(
      <Jumbotron className="galleryJumbo">
          <Carousel>           
            {this.novinaPic()}
            {this.reiPic()}
            {/*{this.templateMemberPic()}*/}
          </Carousel>
        </Jumbotron>
    );
  }

  renderRangerBox() {
    return(
      <Jumbotron className="galleryJumbo">
        <Container >
          <Carousel>
            
            {this.jenniePic()}
            {this.kryszaPic()}
            {this.seigfriedPic()}
            {/*{this.templateMemberPic()}*/}
          </Carousel>
        </Container>
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
            {this.velvetPic()}
            {this.tristanPic()}
            {/*{this.templateMemberPic()}*/}
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

  seigfriedPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/seigfried.jpg"
          alt="Seigfried Stratos"
        />
        <Carousel.Caption>
          <p className="galleryP">Seigfried Stratos</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  tristanPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/tristan.png"
          alt="Tristan Azthalt"
        />
        <Carousel.Caption>
          <p className="galleryP">Tristan Azthalt</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  rumblePic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/rumble.jpg"
          alt="Rumble Pumn"
        />
        <Carousel.Caption>
          <p className="galleryP">Rumble Pumn</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  
  templateMemberPic() {
    return(
      <Carousel.Item>
        <img
          src="images/member_photos/INSERT IMAGE HERE"
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
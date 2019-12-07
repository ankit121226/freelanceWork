import React, { Component } from "react";
import { Nav, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import Icofont from "react-icofont";

export class SideNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

    render() {
        return (
            <React.Fragment>
                <Nav.Link onClick={this.handleShow}><span></span></Nav.Link>

                  <Modal show={this.state.show} onHide={this.handleClose} className="right">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="logo"><a href="/">{this.props.logotext}<span>{this.props.logotextspan}</span> </a></div>
                        <p>{this.props.content}</p>
                        <ul className="modal-contact-info">
                            <li><Icofont icon="icofont-google-map" /> <b>{this.props.locationbolt}</b>{this.props.locationnormal}</li>
                            <li><Icofont icon="icofont-ui-call" /> <b>{this.props.phonebolt}</b>{this.props.phonenormal}</li>
                            <li><Icofont icon="icofont-envelope" /> <b>{this.props.mailbolot}</b>{this.props.mailnormal}</li>
                        </ul>

                        <ul className="social-links">
                            <li><a href={this.props.facebooklink}><Icofont icon="icofont-facebook"/></a></li>
                            <li><a href={this.props.twitterlink}><Icofont icon="icofont-twitter"/></a></li>
                            <li><a href={this.props.instagramlink}><Icofont icon="icofont-instagram"/></a></li>
                            <li><a href={this.props.linkedinlink}><Icofont icon="icofont-linkedin"/></a></li>
                            <li><a href={this.props.pinterestlink}><Icofont icon="icofont-pinterest"/></a></li>
                        </ul>
                    </Modal.Body>
                  </Modal>
            </React.Fragment>
            
    );
  }
}
    SideNav.PropsTypes = {
        logotext: PropTypes.string,
        logotextspan: PropTypes.string,
        content: PropTypes.string,
        locationbolt: PropTypes.string,
        locationnormal: PropTypes.string,
        phonebolt: PropTypes.string,
        phonenormal: PropTypes.string,
        mailbolot: PropTypes.string,
        mailnormal: PropTypes.string,
        facebooklink: PropTypes.string,
        twitterlink: PropTypes.string,
        instagramlink: PropTypes.string,
        linkedinlink: PropTypes.string,
        pinterestlink: PropTypes.string,

}
SideNav.defaultProps = {
    logotext: "M",
    logotextspan: "ECHMEE",
    content: "Mechmee comes as a source of profound knowledge over large number of educational institutions. Even, we are grandiose in providing information about different courses. As a matter of fact, we work as a team to guide perfectly about to choose the desired institution. There are certain undertakings, that we provide. We highly recommend our candidates to seek information on our program of test preparation. It is quite remarkable to maintain a proper follow up, and we give the best resources making your desires quenchable.",
    locationbolt: "BTM Layout Stage 2, Bangalore",
    locationnormal: "Karnataka - 560076",
    phonebolt: "+91 8050624407",
    phonenormal: "Give us a call",
    mailbolot: "mechmee2k18@gmail.com",
    // mailnormal: "24/7 online support",
    facebooklink: "#",
    twitterlink: "#",
    instagramlink: "#",
    linkedinlink: "#",
    pinterestlink: "#",
}
export default SideNav;

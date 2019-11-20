import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container,NavDropdown} from "react-bootstrap";
import  DefaultStyle from './CustomNavBar'

import SideNav from  "../components/SideNav";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
    render() {
        return (
         <DefaultStyle>
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light custom-nav"
                    collapseOnSelect={true}
                >
                <Container>
                    <Navbar.Brand >
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            <span>M</span>echMee
                            {/* <div> +91 8050624407</div>
                            <div>mechmee2k18@gmail.com</div> */}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        id="collaspe-btn"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    Home
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <NavDropdown title="Course Details" id="basic-nav-dropdown">
                                    <NavDropdown title="MEDICAL" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">MBBS</NavDropdown.Item>
                                        <NavDropdown.Item href="#">BDS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">MDS</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="AYURVEDA" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">BAMS</NavDropdown.Item>
                                        <NavDropdown.Item href="#">BHMS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">BNYS</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="PHARMACY" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">B.PHARMA</NavDropdown.Item>
                                        <NavDropdown.Item href="#">D.PHARMA</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">PHARMD</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="PHYSIOTHRAPY" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">BPT</NavDropdown.Item>
                                        <NavDropdown.Item href="#">GNM</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">BSC.NURSING</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="ENGINEERING" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">MECHANICAL</NavDropdown.Item>
                                        <NavDropdown.Item href="#">CS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">CIVIL</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">ELECTRICAL</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">ECE</NavDropdown.Item> 
                                    </NavDropdown>
                                    <Nav.Item style={{color: '#71c228'}}>
                                    MBA
                                  </Nav.Item>
                                </NavDropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <NavDropdown title="Courses" id="basic-nav-dropdown">
                                    <NavDropdown title="MEDICAL" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">MBBS</NavDropdown.Item>
                                        <NavDropdown.Item href="#">BDS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">MDS</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="AYURVEDA" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">BAMS</NavDropdown.Item>
                                        <NavDropdown.Item href="#">BHMS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">BNYS</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="PHARMACY" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">B.PHARMA</NavDropdown.Item>
                                        <NavDropdown.Item href="#">D.PHARMA</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">PHARMD</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="PHYSIOTHRAPY" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">BPT</NavDropdown.Item>
                                        <NavDropdown.Item href="#">GNM</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">BSC.NURSING</NavDropdown.Item> 
                                    </NavDropdown>
                                    <NavDropdown title="ENGINEERING" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">MECHANICAL</NavDropdown.Item>
                                        <NavDropdown.Item href="#">CS</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">CIVIL</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">ELECTRICAL</NavDropdown.Item> 
                                        <NavDropdown.Item href="#">ECE</NavDropdown.Item> 
                                    </NavDropdown>
                                </NavDropdown>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <NavDropdown title="MEDICAL" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">MBBS</NavDropdown.Item>
                                    <NavDropdown.Item href="#">BDS</NavDropdown.Item>
                                    <NavDropdown.Item href="#">MDS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>

                            <Nav.Item>
                                <NavDropdown title="AYURVEDA" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">BAMS</NavDropdown.Item>
                                    <NavDropdown.Item href="#">BHMS</NavDropdown.Item>
                                    <NavDropdown.Item href="#">BNYS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item> */}

                            {/* <Nav.Item>
                                <NavDropdown title="PHARMACY" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">B.PHARMA</NavDropdown.Item>
                                    <NavDropdown.Item href="#">D.PHARMA</NavDropdown.Item>
                                    <NavDropdown.Item href="#">PHARMD</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>

                            <Nav.Item>
                                <NavDropdown title="PHYSIOTHRAPY" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">BPT</NavDropdown.Item>
                                    <NavDropdown.Item href="#">GNM</NavDropdown.Item>
                                    <NavDropdown.Item href="#">BSC.NURSING</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>

                            <Nav.Item>
                                <NavDropdown title="ENGINEERING" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#">MECHANICAL</NavDropdown.Item>
                                    <NavDropdown.Item href="#">C S</NavDropdown.Item>
                                    <NavDropdown.Item href="#">CIVIL</NavDropdown.Item>
                                    <NavDropdown.Item href="#">ELECTRICAL</NavDropdown.Item>
                                    <NavDropdown.Item href="#">ECE</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item> */}

                           {/* <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    MBA
                                </Link>
                                </Nav.Item> */}
                                {/* <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    BPT
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    BPT
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    NURSING
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={800}
                                    className="nav-link"
                                    onClick={this.closeNavbar}
                                >
                                    MBA
                                </Link>
                            </Nav.Item> */}
                                
                            <Nav.Item>
                                {/* SideNav: src/components/SideNav */}
                                <SideNav />
                            </Nav.Item>
                        </Nav> 
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </React.Fragment> 
     </DefaultStyle>
    );
  }
}

export default NavBar;

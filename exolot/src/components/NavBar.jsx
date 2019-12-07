import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container,NavDropdown, Dropdown} from "react-bootstrap";
import  DefaultStyle from './CustomNavBar';
import history from '../utils/history';

import SideNav from  "../components/SideNav";

class NavBar extends Component {
    Courses = ['MEDICAL', 'AYURVEDA', 'PHARMACY','ENGINEERING', 'PHYSIOTHRAPY' ];
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

    HandleClick = (e) =>{
        const courseName  = e.currentTarget.innerText;
        debugger
        switch(courseName){
            case 'MEDICAL':
            history.push({
                pathname: '/medical',
                state: {
                  imgsrc: '',
                }
              })
              break;
              case 'AYURVEDA':   
            history.push({
                pathname: '/ayurveda',
                state: {
                  imgsrc: '',
                }
              })
              break;
              case 'PHARMACY':
            history.push({
                pathname: '/pharmacy',
                state: {
                  imgsrc: '',
                }
              })
              break;
              case 'PHYSIOTHRAPY':
            history.push({
                pathname: '/physiothrapy',
                state: {
                  imgsrc: '',
                }
              })
              break;
              case 'ENGINEERING':
            history.push({
                pathname: '/enginering',
                state: {
                  imgsrc: '',
                }
              })
              break;
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
                           <span>M</span><span className="logoColor">echMee</span>
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

                            {/* <Nav.Item>
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
                            </Nav.Item> */}
                            <NavDropdown title="Course Details">
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'MEDICAL'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">MBBS</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">BDS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">MDS</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'AYURVEDA'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">BAMS</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">BHMS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">BNYS</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'PHARMACY'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">B.PHARMA</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">D.PHARMA</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">PHARMA</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'PHYSIOTHRAPY'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">BPT</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">GNM</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">BSC.NURSING</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'ENGINEERING'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">MECHANICAL</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">CS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">CIVIL</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">ECE</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">ELECTRICAL</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                
                            </NavDropdown>

                            <NavDropdown title="Courses">
                              {this.Courses.map((val, ind)=>{
                                  return(
                                    <Dropdown.Item eventKey={ind} onClick={(e)=>this.HandleClick(e)}>{val}</Dropdown.Item>
                                  )
                              })}
                                {/* {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'MEDICAL'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                    onClick={(e)=>this.HandleClick(e)}
                                >
                                    <Dropdown.Item eventKey="1">MBBS</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">BDS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">MDS</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'AYURVEDA'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">BAMS</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">BHMS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">BNYS</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'PHARMACY'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">B.PHARMA</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">D.PHARMA</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">PHARMA</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'PHYSIOTHRAPY'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">BPT</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">GNM</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">BSC.NURSING</Dropdown.Item>
                                </NavDropdown>
                                ))}
                                {['left'].map(direction => (
                                <NavDropdown
                                    drop={direction}
                                    variant="secondary"
                                    title={'ENGINEERING'}
                                    id={`dropdown-button-drop-${direction}`}
                                    key={direction}
                                >
                                    <Dropdown.Item eventKey="1">MECHANICAL</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">CS</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">CIVIL</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">ECE</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">ELECTRICAL</Dropdown.Item>
                                </NavDropdown>
                                ))} */}
                                
                            </NavDropdown>
                            

                            {/* <Nav.Item>
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
                            </Nav.Item> */}
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

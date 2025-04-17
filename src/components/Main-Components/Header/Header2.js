import { Link } from '@material-ui/core';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Header2() {


    return (
        <>

            <Navbar id="header" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="/" className="logo float-left "><img src="/assets/img/logo1.png" alt="Company Logo" title="Company Logo"/></Navbar.Brand>
                    <br></br>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="my-0">
                        <Nav className="mr-auto">


                        </Nav>


                        <Nav className="nav-menu">
                        <LinkContainer to="/" activeClassName="active-link" isActive={checkActive}>
                            <Nav.Link  className="navbar-link text-white linkHere">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about-us">
                            <Nav.Link className="navbar-link text-white linkHere">About</Nav.Link>
                            </LinkContainer>
                            <NavDropdown className="area active" style={{ Color: "#58b958", hover: "color:#fff", marginBottom:"10px" }} title={"Services"} id="collasible-nav-dropdown">
                                <div className="unorderedList">
                                    {/* <NavDropdown className="area" style={{ Color: "#58b958", hover: "color:#fff" }} title={"Services"} id="collasible-nav-dropdown">
                                        <div className="unorderedList">

                                            <NavDropdown.Item href="#action/3.1">Personal VA Service</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Website Service</NavDropdown.Item>
                                            
                                        </div>
                                    </NavDropdown> */}
                                    <LinkContainer to="/personal-tasks">
                                    <NavDropdown.Item>Personal VA Service</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/executive">
                                    <NavDropdown.Item>Executive Secretarial Task</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/bookkeeping">
                                    <NavDropdown.Item>Book Keeping</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/website-services">
                                    <NavDropdown.Item>Website Service</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/linkedin">
                                    <NavDropdown.Item>Linkedin Services</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/digital-services">
                                    <NavDropdown.Item>Digital Services</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/business">
                                    <NavDropdown.Item>Business Process Support</NavDropdown.Item>
                                    </LinkContainer>
                                </div>
                            </NavDropdown>
                            <div></div>
                            <NavDropdown className="area " style={{ Color: "#58b958", hover: "color:#fff"}} title={"Industry"} id="collasible-nav-dropdown">
                                <div className="unorderedList">
                                    
                                <LinkContainer to="/education-and-training">
                                    <NavDropdown.Item >Education &amp; Training</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/entertainment-and-event-management">
                                    <NavDropdown.Item >Entertainment &amp; Event Management</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/healthcare-and-fitness">
                                    <NavDropdown.Item >Healthcare &amp; Fitness</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/retail-and-ecommerce">
                                    <NavDropdown.Item >Retail &amp; E-Commerce</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/sales-and-marketing">
                                    <NavDropdown.Item >Sales &amp; Marketing</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/real-estate-services">
                                    <NavDropdown.Item >Real Estate</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/staffing-recruitment-service">
                                    <NavDropdown.Item >Staffing &amp; Recruitment</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/travel-vacation-rentals-service">
                                    <NavDropdown.Item >Travel &amp; Vacation Rentals</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/customerServices">
                                    <NavDropdown.Item >Customer service</NavDropdown.Item>
                                    </LinkContainer>
                                    
                                </div>
                            </NavDropdown>
                            {/* <Nav.Link className="drop-down text-white navbar-link"><a href="">Services</a>
                                <ul>

                                    <li className="drop-down"><a href="#">Personal VA Service</a>
                                        <ul>
                                            <li><a href="#">Personal Tasks</a></li>
                                            <li><a href="#">Executive Secretarial Task</a></li>

                                        </ul>
                                    </li>
                                    <BookKeep />
                                    <li><a href="#">Website Service</a></li>
                                    <LinkedinLink />
                                    <li><a href="#">Digital Services</a></li>
                                    <li><a href="#">Business Process Support</a></li>


                                </ul>
                            </Nav.Link>
                            <Nav.Link className="drop-down  text-white navbar-link"><a href="">Industry</a>
                                <ul>
                                    <li><a href="#">Education &amp; Training</a></li>

                                    <li><a href="#">Entertainment &amp; Event Management</a></li>
                                    <li><a href="#">Healthcare &amp; Fitness</a></li>

                                    <li><a href="#">Retail &amp; E-Commerce</a></li>
                                    <li><a href="#">Sales &amp; Marketing</a></li>
                                    <RealEstateLi />
                                    <li><a href="#">Staffing &amp; Recruitment</a></li>
                                    <li><a href="#">Travel &amp; Vacation Rentals</a></li>
                                    <li><a href="#">Customer service</a></li>

                                </ul>
                            </Nav.Link>
                             */}
                             <LinkContainer to="/how-it-works">
                            <Nav.Link className="navbar-link text-white linkHere" href="">How it works?</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/pricing-plans">
                            <Nav.Link className="navbar-link text-white linkHere" href="">Pricing &amp; Plans</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact-us">
                            <Nav.Link className="navbar-link text-white linkHere" href="">Contact Us</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/faq">
                            <Nav.Link className="navbar-link text-white linkHere" href="">FAQ</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/refer-a-friend">
                            <Nav.Link className="navbar-link text-white linkHere" href="">Refer</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/customerServices"> */}
                            <Nav.Link className="navbar-link text-white search-box " href="#">
                                <span>
                                    <button className="btn-search" href="contact"><i className="icofont-search-1"></i></button>
                                    <input type="text" className="input-search" placeholder="Type to Search..."></input>

                                </span></Nav.Link>
                                



                            {/* <Nav.Link className="navbar-link text-white" href="#"><span><i class="icofont-search-1"></i></span></Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </>
    )
}

export default Header2

const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}



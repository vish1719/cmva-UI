import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Link from './BookKeep';
import BookKeep from './BookKeep';
import LinkedinLink from './LinkedinLink';
import RealEstateLi from './RealEstateLi';
// const Navbar = styled.span `
// color: #fff;
// `;

function Header2() {
    
    return (
        <>

            <Navbar id="header" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <div className="container-fluid">
                    <Navbar.Brand href="#home" className="logo float-left"><a href="index.html"><img src="/assets/img/logo1.png" alt="" /></a></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="my-0">
                        <Nav className="mr-auto">


                        </Nav>


                        <Nav className="nav-menu">
                            <Nav.Link className="navbar-link text-white" href="/"><span>Home</span></Nav.Link>
                            <Nav.Link className="navbar-link text-white" href="/about"><span>About</span></Nav.Link>
                            
                            <Nav.Link className="drop-down text-white navbar-link"><a href="">Services</a>
                                <ul>

                                    <li className="drop-down"><a href="#">Personal VA Service</a>
                                        <ul>
                                            <li><a href="#">Personal Tasks</a></li>
                                            <li><a href="#">Executive Secretarial Task</a></li>

                                        </ul>
                                    </li>
                                    <BookKeep/>
                                    <li><a href="#">Website Service</a></li>
                                    <LinkedinLink/>
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
                            <Nav.Link className="navbar-link text-white" href="/how"><span>How it works?</span></Nav.Link>
                            <Nav.Link className="navbar-link text-white" href="/pricing"><span>Pricing &amp; Plans</span></Nav.Link>
                            <Nav.Link className="navbar-link text-white" href="/contact"><span>Connect</span></Nav.Link>
                            <Nav.Link className="navbar-link text-white search-box" href="#">
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



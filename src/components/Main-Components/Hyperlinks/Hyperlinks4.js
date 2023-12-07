import React from 'react';
import { Link } from 'react-router-dom';

function Hyperlinks4() {
    return (
        <>
            <div id="contact" className="hyper">
                <div className="container">



                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                        
                        <div className="row">
                            <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 sixth">
                                    <h3>Process</h3>
                                <p>Know more about Our process </p>

                                <Link to={"/process"}>Process</Link>
                                    </div>
                                </div>

                            <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 first">
                                        <h3>Services we offer</h3>
                                        <p>What does Our Virtual assistant help you with?
                                            Check out this list of the best virtual assistant services for your budget and business needs</p>
                                        <p>
                                            <ul className="toRemLi">
                                                <li>E-Commerce</li>
                                                <li>Executive assistant</li>
                                                <li>Customer Services</li>
                                            </ul>
                                        </p>
                                        <Link to={"/executive"}>Services</Link>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 month">
                                        <h3>Monthly subscription plan</h3>
                                        <p>ConnectMyVA monthly subscription plans are designed to match our clients
planned budget and requirements.</p>

                                        <Link to={"/pricing2"}>Monthly Subscription Plans</Link>
                                    </div>
                                </div>
                                

                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 ind">
                                        <h3>Industry we serve</h3>
                                        <p>ConnectMyVA Serve various industries, with our niche industry experiences we help
our clients to grow drastically in digital marketing environment</p>

                                        {/* <p>
                                            <ul>
                                                <li>E-Commerce</li>
                                                <li>Executive assistant</li>
                                                <li>Customer Services</li>
                                            </ul>
                                        </p> */}
                                        <Link to={"/business"}>Industry</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="row">
                                

                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="info-box1 second">
                                        <h3>About Us</h3>
                                        <p>Want to know more about our services and plans. Contact us and feel free to get clarifications? Give us a call or email before Signup</p>
                                        <p>
                                            <ul>
                                                <li>E-Commerce</li>
                                                <li>Executive assistant</li>
                                                <li>Customer Services</li>
                                            </ul>
                                        </p>
                                        <a href="#">Know more</a>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info-box1 second">
                                        <h3>Pricing and plans</h3>
                                        <p>Want to know more about our services and plans. Contact us and feel free to get clarifications? Give us a call or email before Signup</p>

                                        <a href="#">Know more</a>
                                    </div>
                                </div>
                            </div>

                        </div> */}








                    </div>

                </div>
            </div>
        </>
    )
}

export default Hyperlinks4

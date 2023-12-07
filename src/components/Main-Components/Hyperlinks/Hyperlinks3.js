import React from 'react';
import { Link } from 'react-router-dom'

function Hyperlinks3() {
    return (
        <>
            <div id="contact" className="hyper">
                <div className="container">



                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">

                            <div className="info-box1 first">

                                <h3>SERVICES WE OFFER</h3>
                                <p>What does Our Virtual assistant help you with?
                                    Check out this list of the best virtual assistant services for your budget and business needs</p>
                                <p>
                                    <ul className="toRemLi">
                                        <li>E-Commerce</li>
                                        <li>Executive assistant</li>
                                        <li>Customer Services</li>
                                    </ul>
                                </p>
                                <Link to={"/retail-and-ecommerce"}>Services</Link>
                            </div>

                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info-box1 second">
                                        {/* <h3>Refer a friend</h3> */}
                                        <p>Refer your friends to ConnectMyVA in single click to grow together.</p>

                                        <Link to={"/refer"}>Refer a friend</Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div className="info-box1 third">
                                        <h3>How it works?</h3>
                                        <p>Hire a Virtual assistant of ConenctMyVA today and obtain swift and productive business assistance. Click below to know how we work with our clients.</p>

                                        {/* <p>
                                            <ul>
                                                <li>E-Commerce</li>
                                                <li>Executive assistant</li>
                                                <li>Customer Services</li>
                                            </ul>
                                        </p> */}
                                        <Link to={"/how"}>How it works?</Link>
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

export default Hyperlinks3

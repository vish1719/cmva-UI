import React from 'react';
import { Link } from 'react-router-dom';

function Hyperlinks5() {
    return (
        <>
            <div id="contact" className="hyper">
                <div className="container">



                    <div className="row">

                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">

                            <div className="row">

                            <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 first">
                                        <h2>Services we offer</h2>
                                        <p>What does Our Virtual assistant help you with?
                                            Check out this list of the best virtual assistant services for your budget and business needs</p>
                                        <p>
                                            <ul className="toRemLi">
                                            <li><Link to={"/retail-and-ecommerce"}>E-Commerce</Link></li>
                                                <br></br>
                                                <li><Link to={"/executive"}>Executive assistant</Link></li>
                                                <br></br>
                                                <li><Link to={"/customerServices"}>Customer Services</Link></li>
                                                <br></br>
                                                <li><Link to={"/business"}>Services</Link></li>
                                            </ul>
                                        </p>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                    <div className="info-box1 seventh">
                                        <h3>About Us</h3>
                                        <p></p>

                                        <Link to={"/about"}>About us</Link>
                                    </div>
                                </div>

                                
                            </div>

                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                <div className="info-box1 fourth">
                                        <h3>Pricing &amp; plans</h3>
                                        <p>Paying high salary to your in-house employee!!! <br/>
                                        <br/>

Select our A monthly plan to get all the benefits from your personal assistant.</p>

                                        <Link to={"/pricing1"}>Pricing &amp; plans</Link>
                                    </div>
                                </div>
                                

                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" >
                                <div className="info-box1 fifth">
                                        <h3>Do you have any questions?</h3>
                                        <p>Want to know more about our services and plans. Contact us and feel free to get clarifications? Give us a call or email before Signup.</p>

                                        
                                        <Link to={"/contact2"}>Contact us</Link>
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

export default Hyperlinks5

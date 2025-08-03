import React from 'react';
import { Link } from 'react-router-dom';

function Hyperlinks2() {
    return (
        <>
            <div id="contact" className="hyper">
                <div className="container">



                    <div className="row">

                        {/*<div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">

                            <div className="info-box1 signup">

                                
                                <p>Sign up with ConnectMyVA is simple and easy, so we handle your task and you can enjoy the
moments.</p>
                                
                                <Link to={"/signup"}>Sign Up</Link>
                            </div>

                        </div>*/}
                        <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info-box1 fourth">
                                        <h2>Pricing &amp; plans</h2>
                                        <p>Paying high salary to your in-house employee!!! <br/>
                                        <br/>

Select our A monthly plan to get all the benefits from your personal assistant.</p>

                                        <Link to={"/pricing-plans"}>Pricing &amp; plans</Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div className="info-box1 fifth">
                                        <h2>Do you have any questions?</h2>
                                        <p>Want to know more about our services and plans. Contact us and feel free to get clarifications? Give us a call or email before Signup

</p>

                                        
                                        <Link to={"/contact-us"}>Contact us</Link>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Hyperlinks2

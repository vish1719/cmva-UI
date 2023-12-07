import React from 'react'
import { Link } from 'react-router-dom'

function HireSec() {
    return (
        <>
            <div id="contact" className="contact new-contact hiresec">
                <div className="container">

                    {/* <div className="section-title">
                        <h2>Contact Us</h2>
                    </div> */}

                    <div className="row">

                        <div className="col-lg-3 " >
                            
                        </div>

                        <div className="col-lg-6 d-flex align-items-stretch"   data-aos="fade-up" data-aos-delay="100">
                            <div className="info-box" style={{ marginBottom: "70px" }}>
                                <p>Reliable Business Support</p>
                                {/* <h3>Hire a Virtual Assistant for Your business</h3> */}
                                <div className="about">
                                <h2 className="title"><strong><span>Hire a Virtual Assistant  </span></strong>for Your business</h2>
                                </div>
                                <Link to={"/signup"}>Get Started</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            
                        </div>

                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default HireSec

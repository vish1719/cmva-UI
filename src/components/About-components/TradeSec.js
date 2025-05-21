/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';

function TradeSec() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
            <div id="services" className="services" >
                <div className="container">
                    <div className="section-title" style={{ marginTop: "30px" }}>
                        <h5>Our Trademark</h5>
                    </div>

                    <div className="section-title">
                        <h1><span>Top-class </span>Virtual Assistants</h1>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="col-lg-12 col-md-12 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="icofont-light-bulb"></i></div>
                                <h4 className="title"><a href="">Inventive</a></h4>
                                <p className="description">Our VAs provide you with clear-sighted results to step up your line of work and give back your time</p>
                            </div>
                            <div className="col-lg-12 col-md-12 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="icofont-ssl-security"></i></div>
                                <h4 className="title"><a href="">Secure Environment</a></h4>
                                <p className="description">Every data you share with our organization is priceless and is secured in our CRM with controlled access to VAs</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 icon-box img-girl" >
                        <img width="100%" height="auto" src="/assets/images/Girl.png" className="img-fluid " alt="Skilled Female Virtual Assistant - ConnectMyVA" 
  title="Top-Class Female Virtual Assistant Services by ConnectMyVA"  />
                        </div>

                        <div className="col-xl-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 col-md-12 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="icofont-teacher"></i></div>
                                <h4 className="title"><a href="">Skilled Professionals</a></h4>
                                <p className="description">ConnectMyVA hires talented graduates across the globe with the tendency to learn and transfer for assistance.</p>
                            </div>
                            <div className="col-lg-12 col-md-12 icon-box" data-aos="fade-up">
                                <div className="icon"><i className="icofont-badge"></i></div>
                                <h4 className="title"><a href="">Complete Trust</a></h4>
                                <p className="description">We are a trusted brand with 100% gratification to our clients. And, also with an additional prospect to analyze the efforts</p>
                            </div>
                        </div>


                    </div>

                    {/* <div className="section-title" styles="padding-bottom: 0px;" data-aos="fade-up" data-aos-delay="300">
                        <a href="#about" className="common-btn animated fadeInUp scrollto">See How We Work</a>
                        <h2><span>” If you spend your time, worth $20-25 per hour, doing something that someone else will do for $10 per hour, it’s simply a poor use of resources.”</span></h2>
                        <h4>
                            Timothy Ferriss – The 4-Hour Workweek
                        </h4>
                    </div> */}

                </div>
            </div>

        </>
    )
}

export default TradeSec

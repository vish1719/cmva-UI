/* eslint-disable */
import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


function PricingHomeSec() {
    return (
        <>
        
        

            <section id="services" className="pricing1">
                <div className="container">

                    <div className="section-title">
                        <h2>Pricing &amp; Plans</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up">
                            <div className="packages_item">
                                <div className="pack_head">
                                {/* <i className="icofont-paper-plane"></i> */}
                                <i class="icofont-runner-alt-1"></i>
                                    <h3>Tiptoe-1</h3>
                                    {/* <p>For the individuals</p> */}
                                </div>
                                <div className="pack_body">
                                    <ul className="list">
                                        <li>Hours Included -    1hr</li>
                                        <li>Hourly Rate	-   $15</li>
                                        <li>Additional Hour Rate -  Flat charges</li>
                                        <li>Rollover -  NA</li>
                                    </ul>
                                </div>
                                <div className="pack_footer">
                                    <h4>$15/Mo</h4>
                                    <Link className="main_btn" to={{pathname: "/signup", state: {planname: 'Tiptoe-1'} }}>Sign Up</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="200">
                            <div className="packages_item">
                                <div className="pack_head">
                                {/* <i class="icofont-bicycle-alt-2"></i> */}
                                {/* <i class="icofont-cycling"></i> */}
                                
                                <i class='bx bx-cycling'></i>
                                {/* <i className="icofont-airplane-alt"></i> */}
                                    <h3>Begin-10</h3>
                                    {/* <p>For the individuals</p> */}
                                </div>
                                <div className="pack_body">
                                    <ul className="list">
                                        <li>Hours Included -    10hrs</li>
                                        <li>Hourly Rate	-   $9</li>
                                        <li>Additional Hour Rate -  Flat charges</li>
                                        <li>Rollover -  All Unused hrs*</li>
                                    </ul>
                                </div>
                                <div className="pack_footer">
                                    <h4>$90/Mo</h4>
                                    <Link className="main_btn" to={{pathname: "/signup", state: {planname: 'Begin-10'} }}>Sign Up</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box priceBox" data-aos="fade-up" data-aos-delay="400">
                            <div className="packages_item">
                                <div className="pack_head">
                                {/* <i className="icofont-rocket-alt-2"></i> */}
                                <i class="icofont-motor-bike-alt"></i>
                                    <h3>Experiment-20</h3>
                                    {/* <p>For the individuals</p> */}
                                </div>
                                <div className="pack_body">
                                    <ul className="list">
                                        <li>Hours Included -    20hr</li>
                                        <li>Hourly Rate	-   $8.5</li>
                                        <li>Additional Hour Rate -  Flat charges</li>
                                        <li>Rollover -  All Unused hrs*</li>
                                    </ul>
                                </div>
                                <div className="pack_footer">
                                    <h4>$170/Mo</h4>
                                    <Link className="main_btn" to={{pathname: "/signup", state: {planname: 'Experiment-20'} }}>Sign Up</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="section-title my-6" data-aos="fade-up" data-aos-delay="600">
                        <a href="/pricing-plans" className="common-btn animated fadeInUp scrollto">View All Plans</a>
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default PricingHomeSec

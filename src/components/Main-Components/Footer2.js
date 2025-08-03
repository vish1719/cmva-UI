/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

function Footer2() {
    return (
        <>
            <footer id="footer">
                {/* <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-links footer-info">
                                <h3>Services</h3>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/personal-tasks"}>Personal Tasks</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/business"}>Business Support Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/digital"}>Digital Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/website"}>IT/Website Services</Link></li>
                                    
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links footer-info">
                                <h3>Terms Of Use</h3>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/copyright"}>Copyright</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/refund"}>Refund policy</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/privacy"}>Privacy Policy</Link></li>
                                    
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links footer-info">
                                <h3>More Links</h3>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/"}>Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/how"}>How it works?</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to={"/pricing1"}>Pricing &amp; Plans</Link></li>
                                    
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <Link to={"/"}><img src="/assets/img/logo1.png" alt="" /></Link>
                                
                                <p>At ConnectMyVA, we hire Graduates and post graduates, detail-oriented people who strive to provide our clients with the best assistance on the planet.</p>


                            </div>

                        </div>
                    </div>
                </div> */}
                <div className="footer-top2">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 footer-info">
                            <div className="copyright">
                                    &copy; 2021 <strong><span>ConnectMyVA</span></strong>. All Rights Reserved
                                </div>


                            </div>
                            <div className="col-lg-4 col-md-6 footer-links footer-info">
                            <div className="copyright2">
                            USA TOLL FREE NUMBER: <strong><span><a href="tel: 1 888-693-1297">1 888-693-1297</a></span></strong>
                                </div>
                                <div className="credits">
                                   
                                    <a href="mailto:support@connectmyva.com">support@connectmyva.com</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-links footer-info">
                                <div className="social-links mt-3">
                                    <a href="https://twitter.com/connectmyva" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="https://www.facebook.com/Connect-Myva-105505247698027" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    {/* <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                                    <a href="skype:46ba85c7f2126cd16?call" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="https://www.linkedin.com/company/connectmyva/jobs/?viewAsMember=true" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2

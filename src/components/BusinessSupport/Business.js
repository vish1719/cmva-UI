import React from 'react'
import { Helmet } from 'react-helmet-async';
import BusinessTabs from './BusinessTabs'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import BusinessBanner from './BusinessBanner';
function Business() {
    useEffect(() => {
        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }, [])
    return (
        <>
        <Helmet>
    <title>Improve Business Efficiency with ConnectMyVA | Online Business Support</title>
    <meta
      name="description"
      content="Boost your business with ConnectMyVA! We help improve business efficiency and provide expert online business support. Our dedicated assistants manage tasks, streamline processes, and save you time at an affordable cost."
    />
    <meta
      name="keywords"
      content="Improve Business Efficiency, Online Business Support"
    />
    <link rel="canonical" href="https://connectmyva.com/business" />
  </Helmet>
        <BusinessBanner></BusinessBanner>
            <section id="contact" className="contact new-contact">
                <div className="container" style={{ paddingLeft: "0", paddingRight: "0" }}>

                    {/* <div className="section-title">
                        <h2>Business Process Support</h2>
                    </div> */}

                    {/* <div className="row" style={{ paddingLeft: "0", paddingRight: "0" }}> */}


                    <div className="row">
                        <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
                            <BusinessTabs />

                        </div>
                        <div className="col-md-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form3">

                                    <div className="form-group">
                                        <h3 className="head3"> Industries</h3>
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/education-and-training"}>Education &amp; Training</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/entertainment-and-event-management"}>Entertainment &amp; Event Management</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/healthcare-and-fitness"}>Healthcare &amp; Fitness</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/retail-and-ecommerce"}>Retail &amp; E-Commerce</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/sales-and-marketing"}>Sales &amp; Marketing</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"realEstate"}>Real Estate</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/staff"}>Staffing &amp; Recruitment</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/travel"}>Travel &amp; Vacation Rentals</Link></span>
                                    </div>
                                    <div className="form-group">
                                        <span className="head4">  <Link to={"/customerServices"}>Customer service</Link></span>
                                    </div>


                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Business

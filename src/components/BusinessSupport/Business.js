import React from 'react'
import { Helmet } from 'react-helmet-async';
import BusinessTabs from './BusinessTabs'
import Hyperlinks2 from '../Main-Components/Hyperlinks/Hyperlinks2';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Seo from "../Seo";
import BusinessBanner from './BusinessBanner';

function Business() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Seo
                title="Improve Business Efficiency with ConnectMyVA | Online Business Support"
                description="Boost your business with ConnectMyVA! We help improve business efficiency and provide expert online business support. Our dedicated assistants manage tasks, streamline processes, and save you time at an affordable cost."
                path="/business-services"
                keywords="Improve Business Efficiency, Online Business Support"
            />

            

            <BusinessBanner />

            {/* ✅ SEO optimized H1 */}
            {/* <section className="section-title text-center py-4">
                <div className="container">
                    <h3>Improve Business Efficiency with Our Online Support</h3>
                </div>
            </section> */}

            <section id="contact" className="contact new-contact">
                <div className="container" style={{ paddingLeft: "0", paddingRight: "0" }}>

                    <div className="row">
                        <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
                            <BusinessTabs />
                        </div>

                        <div className="col-md-4 contact-sec" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-12 contact-sec" data-aos="fade-up" data-aos-delay="200">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form3">

                                    <div className="form-group">
                                        <h2 className="head3">Industries We Support</h2>
                                    </div>

                                    {[
                                        ["education-and-training", "Education & Training"],
                                        ["entertainment-and-event-management", "Entertainment & Event Management"],
                                        ["healthcare-and-fitness", "Healthcare & Fitness"],
                                        ["retail-and-ecommerce", "Retail & E-Commerce"],
                                        ["sales-and-marketing", "Sales & Marketing"],
                                        ["realEstate", "Real Estate"],
                                        ["staff", "Staffing & Recruitment"],
                                        ["travel", "Travel & Vacation Rentals"],
                                        ["customerServices", "Customer Service"]
                                    ].map(([path, name]) => (
                                        <div className="form-group" key={path}>
                                            <span className="head4"><Link to={`/${path}`}>{name}</Link></span>
                                        </div>
                                    ))}
                                  
                                </form>
                            </div>
                        </div>
                    </div>
                    <Hyperlinks2 />
                </div>
            </section>
        </>
    );
}

export default Business;
